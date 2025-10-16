"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ContactInfo } from "./ContactInfo";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Script from "next/script";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export function ContactContent() {
  const [ok, setOk] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    // Listen for Cal.com events
    const handleCalEvent = (e: MessageEvent) => {
      if (e.origin !== "https://cal.com" && e.origin !== "https://app.cal.com") return;
      
      const data = e.data;
      
      // Push to dataLayer (GTM) or console
      const dataLayer = (window as typeof window & { dataLayer?: unknown[] }).dataLayer || [];
      
      if (data.event === "booking:successful") {
        console.log("[Cal.com] Booking successful:", data);
        dataLayer.push({
          event: "cal_booking_scheduled",
          booking_id: data.bookingId,
          timestamp: new Date().toISOString(),
        });
      }
      
      if (data.event === "booking:closed") {
        console.log("[Cal.com] Booking modal closed");
        dataLayer.push({
          event: "cal_booking_closed",
          timestamp: new Date().toISOString(),
        });
      }
    };

    window.addEventListener("message", handleCalEvent);
    return () => window.removeEventListener("message", handleCalEvent);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Please complete the captcha verification");
      return;
    }
    
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    
    const body = {
      ...formData,
      captchaToken,
    };
    
    const res = await fetch("/api/contact", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body) 
    });
    
    setOk(res.ok);
    setIsSubmitting(false);
    
    if (res.ok) {
      form.reset();
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    }
  }

  return (
    <>
      {/* Cal.com Embed Script */}
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("[Cal.com] Script loaded, attempting to initialize...");
          
          // Give Cal.com time to initialize
          setTimeout(() => {
            const Cal = (window as typeof window & { Cal?: (action: string, options: Record<string, unknown>) => void }).Cal;
            
            console.log("[Cal.com] Cal object exists:", !!Cal);
            
            if (Cal) {
              try {
                Cal("init", { origin: "https://cal.com" });
                console.log("[Cal.com] Init called");
                
                Cal("inline", {
                  elementOrSelector: "#cal-embed",
                  calLink: "cyberglobal/30min",
                  layout: "month_view",
                });
                
                console.log("[Cal.com] Inline called");
                setCalLoaded(true);
              } catch (error) {
                console.error("[Cal.com] Error during initialization:", error);
              }
            } else {
              console.error("[Cal.com] Cal object not found on window");
            }
          }, 100);
        }}
        onError={(e) => {
          console.error("[Cal.com] Script failed to load:", e);
        }}
      />
      
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeIn} className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-400">Get in Touch</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Contact Us
            </h1>
            
            <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
              Tell us about your documents, data, or workflows. We&apos;ll propose a scoped pilot with timelines and outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Left: Form and Contact Info */}
            <div className="space-y-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative glass-panel-glow rounded-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Send a message</h2>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-1"></div>
                  </div>
                </div>

                <form onSubmit={submit} className="space-y-6" aria-label="Contact form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Full name *</label>
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      aria-required="true"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Work email *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      aria-required="true"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message *</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      placeholder="What problem are you trying to solve?"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all h-32 resize-none"
                      aria-required="true"
                      disabled={isSubmitting}
                    />
                  </div>

                  <input type="hidden" name="honeypot" />

                  {/* hCaptcha */}
                  <div className="flex justify-center">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
                      onVerify={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken(null)}
                      ref={captchaRef}
                      theme="dark"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting || !captchaToken}
                    className="w-full rounded-lg px-6 py-4 bg-gradient-to-br from-blue-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>

                  {ok && (
                    <div className="text-green-400 text-sm p-4 rounded-lg bg-green-500/10 border border-green-500/20" role="status" aria-live="polite">
                      ✓ Thanks — we&apos;ll be in touch shortly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
            
            <ContactInfo />
            </div>

            {/* Right Column - Cal.com */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative glass-panel-glow rounded-xl p-3 overflow-hidden">
                  <div className="flex items-center gap-3 p-5 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Schedule a call</h2>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full mt-1"></div>
                    </div>
                  </div>
                  {/* Cal.com Embed with Event Tracking */}
                  <div className="relative w-full" style={{ height: '720px', minHeight: '720px' }}>
                    {!calLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="skeleton w-full h-full rounded-b-lg"></div>
                      </div>
                    )}
                    <div 
                      id="cal-embed"
                      className="w-full h-full rounded-b-lg overflow-hidden"
                      style={{ minHeight: '720px' }}
                    ></div>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

