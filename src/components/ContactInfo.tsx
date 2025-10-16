"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export function ContactInfo() {
  return (
    <motion.div
      {...fadeIn}
      className="glass-panel rounded-xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-neutral-400 mb-1">Email</div>
            <a href="mailto:info@cybergl.ai" className="text-white hover:text-blue-400 transition-colors">
              info@cybergl.ai
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-neutral-400 mb-1">Phone</div>
            <a href="tel:+40752607204" className="text-white hover:text-violet-400 transition-colors">
              +40 752 607 204
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-neutral-400 mb-1">Office</div>
            <div className="text-white">Constantin Brancusi 78</div>
            <div className="text-white">Cluj-Napoca, Romania</div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="text-sm text-neutral-400 mb-3">Legal Entity</div>
          <div className="space-y-1 text-neutral-300 text-sm">
            <div className="font-semibold text-white">CyberGlobal AI LTD</div>
            <div>CUI: 48213020</div>
            <div>Reg. No: J12/2268/2023</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

