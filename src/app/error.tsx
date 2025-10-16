"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [incidentId, setIncidentId] = useState<string>("");

  useEffect(() => {
    // Generate incident ID from error digest or timestamp
    const id = error.digest || `ERR-${Date.now().toString(36).toUpperCase()}`;
    setIncidentId(id);
    
    // Log error to console in development
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Pulsing Circles Background (different from 404) */}
      <div className="ai-bg-pulse">
        <div className="pulse-orb pulse-orb-1"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/20 mb-6">
            <svg className="w-16 h-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Something went wrong
        </h1>
        
        <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
          We encountered an unexpected error. Our team has been notified and we&apos;re looking into it.
        </p>

        {/* Incident ID */}
        {incidentId && (
          <div className="mb-10">
            <div className="glass-panel rounded-xl p-6 inline-block">
              <div className="text-sm text-neutral-400 mb-2">Incident ID</div>
              <code className="text-sm font-mono text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
                {incidentId}
              </code>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-blue-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="text-sm text-neutral-400">
          If this problem persists, please{" "}
          <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors underline">
            contact our support team
          </Link>
          {" "}with the incident ID above.
        </div>
      </div>
    </section>
  );
}

