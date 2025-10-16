import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import * as Sentry from "@sentry/nextjs";

const resend = new Resend(process.env.RESEND_API_KEY || "test_key");

// HTML escape function to prevent injection
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char] || char);
}

// Verify hCaptcha token
async function verifyHCaptcha(token: string): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET;
  
  if (!secret) {
    console.warn("HCAPTCHA_SECRET not set, skipping verification in development");
    return true; // Allow in dev without secret
  }

  try {
    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("hCaptcha verification error:", error);
    return false;
  }
}

// Server-side validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  company: z.string().max(100, "Company name too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2048, "Message too long"), // 2KB limit
  honeypot: z.string().max(0).optional(), // Bot trap
  captchaToken: z.string().min(1, "Captcha verification required"),
}).refine((data) => {
  // Additional 2KB check on total payload
  const totalSize = JSON.stringify(data).length;
  return totalSize <= 2048;
}, {
  message: "Request payload exceeds 2KB limit",
});

// Rate limiting configuration
const RATE_LIMIT = 5; // max submissions per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Simple in-memory rate limiting (dev/fallback)
const rateLimitMap = new Map<string, number[]>();

function checkInMemoryRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((t) => now - t < RATE_WINDOW);
  
  if (recentTimestamps.length >= RATE_LIMIT) return false;
  
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return true;
}

// Upstash Redis rate limiting (production)
async function checkUpstashRateLimit(ip: string): Promise<boolean> {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    // Fallback to in-memory if Upstash not configured
    return checkInMemoryRateLimit(ip);
  }

  try {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    const key = `ratelimit:contact:${ip}`;

    // Use Upstash REST API
    const response = await fetch(`${url}/incr/${key}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      console.error("Upstash error, falling back to in-memory");
      return checkInMemoryRateLimit(ip);
    }

    const data = await response.json();
    const count = data.result;

    // Set expiry on first request
    if (count === 1) {
      await fetch(`${url}/expire/${key}/3600`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }

    return count <= RATE_LIMIT;
  } catch (error) {
    console.error("Upstash rate limit error:", error);
    // Fallback to in-memory on error
    return checkInMemoryRateLimit(ip);
  }
}

// Main rate limit check
async function checkRateLimit(ip: string): Promise<boolean> {
  return await checkUpstashRateLimit(ip);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
  
  try {
    // Rate limiting (async now)
    const allowed = await checkRateLimit(ip);
    if (!allowed) {
      Sentry.captureMessage("Rate limit exceeded for contact form", {
        level: "warning",
        tags: { ip, endpoint: "contact" },
      });
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const data = await req.json();
    
    // Validate with Zod
    const validated = contactSchema.parse(data);
    
    // Bot protection: honeypot check
    if (validated.honeypot) {
      Sentry.captureMessage("Honeypot triggered - bot submission detected", {
        level: "info",
        tags: { ip, endpoint: "contact" },
      });
      // Return success to fool bots
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Verify hCaptcha token
    const captchaValid = await verifyHCaptcha(validated.captchaToken);
    if (!captchaValid) {
      console.error("hCaptcha verification failed for IP:", ip);
      
      Sentry.captureMessage("hCaptcha verification failed", {
        level: "warning",
        tags: { ip, endpoint: "contact" },
      });
      
      return NextResponse.json(
        { ok: false, error: "Captcha verification failed. Please try again." },
        { status: 422 }
      );
    }

    // Sanitize input before sending
    const sanitizedData = {
      name: escapeHtml(validated.name.trim()),
      email: validated.email.trim().toLowerCase(),
      company: validated.company ? escapeHtml(validated.company.trim()) : "N/A",
      message: escapeHtml(validated.message.trim()),
    };

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: "CyberGlobal AI <info@cybergl.ai>",
      to: ["info@cybergl.ai"],
      replyTo: sanitizedData.email,
      subject: `New website inquiry from ${sanitizedData.name}`,
      text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nCompany: ${sanitizedData.company}\n\nMessage:\n${sanitizedData.message}`,
    });

    // Check for Resend errors
    if (emailResult.error) {
      console.error("Resend API error:", emailResult.error);
      
      Sentry.captureException(emailResult.error, {
        tags: { service: "resend", endpoint: "contact" },
        contexts: {
          resend: {
            error: emailResult.error.message,
            name: sanitizedData.name,
            email: sanitizedData.email,
          },
        },
      });
      
      return NextResponse.json(
        { ok: false, error: "Failed to send email. Please try again or contact us directly." },
        { status: 500 }
      );
    }

    // Success - log to Sentry for monitoring
    Sentry.captureMessage("Contact form submission successful", {
      level: "info",
      tags: { endpoint: "contact" },
      contexts: {
        submission: {
          name: validated.name,
          email: validated.email,
          company: validated.company || "N/A",
          emailId: emailResult.data?.id,
        },
      },
    });
    
    return NextResponse.json({ ok: true, message: "Message sent successfully" }, { status: 200 });
    
  } catch (error) {
    // Validation errors (Zod)
    if (error instanceof z.ZodError) {
      const formattedErrors = error.issues.map(err => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      
      console.error("Validation error:", formattedErrors);
      
      Sentry.captureException(error, {
        level: "warning",
        tags: { type: "validation", endpoint: "contact" },
        contexts: {
          validation: {
            errors: formattedErrors,
            ip,
          },
        },
      });
      
      return NextResponse.json(
        { 
          ok: false, 
          error: "Invalid input", 
          details: formattedErrors 
        },
        { status: 422 } // Unprocessable Entity
      );
    }
    
    // Network or unexpected errors
    console.error("Contact API error:", error);
    
    Sentry.captureException(error, {
      level: "error",
      tags: { endpoint: "contact", ip },
      contexts: {
        request: {
          ip,
          userAgent: req.headers.get("user-agent") || "unknown",
        },
      },
    });
    
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

