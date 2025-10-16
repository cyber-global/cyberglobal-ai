import { NextRequest, NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    const { event, props, timestamp, url, referrer } = data;
    
    // Log event (in production, you might send to analytics service)
    console.log("[Event Track]", {
      event,
      props,
      timestamp,
      url,
      referrer,
      ip: req.headers.get("x-forwarded-for") || "unknown",
    });
    
    // Optional: Send to Sentry for monitoring important events (only in production)
    if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SENTRY_DSN) {
      if (event === "cta_click" || event === "form_submit" || event === "cal_booking") {
        try {
          Sentry.captureMessage(`User event: ${event}`, {
            level: "info",
            tags: {
              event_type: event,
              event_location: props?.location || props?.form || props?.status,
            },
            contexts: {
              event: {
                name: event,
                properties: props,
                url,
              },
            },
          });
        } catch (sentryError) {
          // Silently fail Sentry errors
          console.error("[Event Track] Sentry error (ignored):", sentryError);
        }
      }
    }
    
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[Event Track] Error:", error);
    // Return success even on error (don't break user experience)
    return NextResponse.json({ ok: true }, { status: 200 });
  }
}

