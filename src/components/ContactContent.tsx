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
                className="relative group sticky top-24"
              >
                {/* Premium gradient glow halo */}
                <div className="absolute -inset-2 bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-violet-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none"></div>
                
                {/* Glass panel container */}
                <div className="relative glass-panel-glow rounded-2xl overflow-hidden backdrop-blur-xl">
                  {/* Premium header with badge */}
                  <div className="relative px-6 py-6 border-b border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/5 to-transparent"></div>
                    <div className="relative flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-xl shadow-violet-500/30 flex-shrink-0">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/20 text-xs font-medium text-violet-300 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                          Book a Demo
                        </div>
                        <h2 className="text-xl font-bold text-white mb-1">Schedule Your Call</h2>
                        <p className="text-sm text-neutral-400">30-minute consultation with our team</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cal.com iframe with premium integration */}
                  <div className="relative bg-gradient-to-b from-white/[0.02] to-transparent p-6">
                    <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '640px', minHeight: '640px' }}>
                      {/* Subtle inner shadow for depth */}
                      <div className="absolute inset-0 pointer-events-none rounded-xl" style={{ 
                        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                      }}></div>
                      
                      <iframe
                        src="https://cal.com/cyberglobal/30min?embed=true&theme=dark"
                        className="w-full h-full rounded-xl"
                        width="100%"
                        height="640"
                        title="Schedule a consultation call"
                        loading="eager"
                        aria-label="Calendar booking widget"
                        style={{ 
                          border: 'none',
                          backgroundColor: '#0B0B0F',
                        }}
                      />
                    </div>
                    
                    {/* Powered by badge */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500">
                      <svg className="w-3.5 h-3.5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Secure booking via Cal.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

