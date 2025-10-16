"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
    
    // Trigger consent event for analytics to load
    window.dispatchEvent(new Event("consent-granted"));
    
    // Reload to initialize analytics
    window.location.reload();
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 backdrop-blur-xl" style={{ backgroundColor: 'rgba(11, 11, 15, 0.95)' }}>
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-semibold text-white">Cookie Preferences</h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We use cookies for analytics and to improve your experience. No tracking occurs until you consent.{" "}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                Privacy Policy
              </Link>
            </p>
          </div>
          
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="rounded-lg px-5 py-2.5 border border-white/20 hover:border-white/40 text-white text-sm font-medium hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="rounded-lg px-5 py-2.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

