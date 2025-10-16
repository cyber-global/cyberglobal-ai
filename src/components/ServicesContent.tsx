"use client";

import { services } from "@/content/services";
import { servicesFAQs } from "@/content/servicesFAQ";
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

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Morphing Blobs Background */}
        <div className="ai-bg-morph">
          <div className="morph-blob morph-blob-1"></div>
          <div className="morph-blob morph-blob-2"></div>
          <div className="morph-blob morph-blob-3"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-400">Our Capabilities</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              AI Services
            </h1>
            
            <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
              We deliver private, compliant AI that extracts data, finds answers, and automates work — built for regulated teams.{" "}
              <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group">
                View case studies
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            className="grid gap-8 lg:grid-cols-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {services.map((s, idx) => (
              <motion.div key={s.name} className="relative group" variants={fadeIn}>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-panel-glow rounded-xl p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {s.name}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <dl className="space-y-6">
                    {s.items.map((row) => (
                      <div key={row.k} className="group/item">
                        <dt className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          {row.k}
                        </dt>
                        <dd className="text-neutral-200 leading-relaxed pl-4 border-l-2 border-white/10 group-hover/item:border-blue-400/30 transition-colors">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Questions & Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-400">Common questions about our AI services</p>
          </motion.div>

          <FAQ items={servicesFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl"></div>
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
              Ready to get started?
            </span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10">
            Schedule a call to discuss your requirements and see if we&apos;re a fit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
            >
              <span>Book a consultation</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-blue-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
            >
              <span>View case studies</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

