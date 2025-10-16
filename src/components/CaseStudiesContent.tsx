"use client";

import { caseStudies } from "@/content/caseStudies";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const industryColors: Record<string, { from: string; to: string; icon: string }> = {
  "Financial Services": { from: "from-blue-500", to: "to-blue-600", icon: "text-blue-400" },
  "Healthcare": { from: "from-green-500", to: "to-emerald-600", icon: "text-green-400" },
  "Software": { from: "from-violet-500", to: "to-purple-600", icon: "text-violet-400" },
};

export function CaseStudiesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Rotating Stripes Background */}
        <div className="ai-bg-stripes">
          <div className="stripe-accent stripe-accent-1"></div>
          <div className="stripe-accent stripe-accent-2"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
                <span className="text-sm font-medium text-violet-400">Proven Results</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Case Studies
            </h1>
            
            <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
              Selected examples showing speed, quality, and compliance results.{" "}
              <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group">
                Explore our services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {caseStudies.map((c) => {
              const colors = industryColors[c.industry] || industryColors["Software"];
              
              return (
                <motion.article key={c.title} className="relative group" variants={fadeIn}>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative glass-panel-glow rounded-xl p-8 h-full flex flex-col">
                    {/* Industry badge */}
                    <div className="mb-6">
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm ${colors.icon} font-medium`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {c.industry}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                      {c.title}
                    </h2>
                    <div className={`w-12 h-1 bg-gradient-to-r ${colors.from} ${colors.to} rounded-full mb-6`}></div>
                    
                    {/* Summary */}
                    <p className="text-neutral-300 leading-relaxed mb-6 flex-1">
                      {c.summary}
                    </p>
                    
                    {/* Impact metrics */}
                    <div className="space-y-3 pt-6 border-t border-white/10">
                      {c.impact.map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-neutral-200 font-medium">{i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
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
              Write your success story
            </span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10">
            Join organizations that have transformed with private, compliant AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-violet-500 via-violet-600 to-blue-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
            >
              <span>Start your project</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-violet-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all backdrop-blur-sm"
            >
              <span>View services</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

