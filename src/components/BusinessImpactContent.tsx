"use client";

import { businessImpact as copy } from "@/content/businessImpact";
import Link from "next/link";
import { motion } from "framer-motion";
import { FAQ } from "@/components/FAQ";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export function BusinessImpactContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Pulsing Circles Background */}
        <div className="ai-bg-pulse">
          <div className="pulse-orb pulse-orb-1"></div>
          <div className="ai-grid"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Business Value</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              {copy.hero.title}
            </h1>
            
            <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
              {copy.hero.sub}{" "}
              <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group">
                Our services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="grid gap-8 lg:gap-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {copy.sections.map((s, idx) => (
              <motion.div key={s.h} className="relative group" variants={fadeIn}>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-panel-glow rounded-xl p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{s.h}</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-6"></div>
                      
                      {"p" in s && (
                        <p className="text-lg text-neutral-300 leading-relaxed">{s.p}</p>
                      )}
                      
                      {"bullets" in s && (
                        <ul className="space-y-4">
                          {s.bullets!.map((b, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-lg text-neutral-200 leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="mx-auto max-w-4xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Impact FAQ</h2>
            <p className="text-neutral-400">Quick answers about AI business value and implementation</p>
          </motion.div>

          <FAQ items={copy.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          className="mx-auto max-w-4xl px-6 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-300 bg-clip-text text-transparent">
              Ready to measure your AI impact?
            </span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10">
            Discover how private AI can drive measurable outcomes for your organization
          </p>
          
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-green-500 via-green-600 to-blue-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
          >
            <span>{copy.cta}</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

