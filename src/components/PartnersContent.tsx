"use client";

import { partners } from "@/content/partners";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export function PartnersContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Floating Orbs Background */}
        <div className="ai-bg-float">
          <div className="float-orb float-orb-1"></div>
          <div className="float-orb float-orb-2"></div>
          <div className="float-orb float-orb-3"></div>
          <div className="float-orb float-orb-4"></div>
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
                <span className="text-sm font-medium text-violet-400">Strategic Partnerships</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Partners & Ecosystem
            </h1>
            
            <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
              {partners.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Key Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted collaborators</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Industry leaders we work with to deliver exceptional solutions
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {partners.featured.map((partner) => (
              <motion.div key={partner.name} className="relative group" variants={fadeIn}>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Link
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative glass-panel-glow rounded-xl p-8 h-full hover:scale-[1.02] transition-transform"
                >
                  {/* Logo */}
                  <div className="mb-6 h-20 flex items-center justify-center">
                    <div className="relative w-full h-20 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-4 group-hover:border-blue-400/50 transition-colors overflow-hidden">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={180}
                        height={60}
                        className="object-contain max-h-16"
                        style={{ filter: 'brightness(1.1)' }}
                      />
                    </div>
                  </div>
                  
                  {/* Name & Link */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {partner.name}
                    </h3>
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  
                  {/* Description */}
                  <p className="text-neutral-300 leading-relaxed text-sm">
                    {partner.description}
                  </p>
                  
                  {/* URL */}
                  <div className="mt-4 text-xs text-blue-400/70">
                    {partner.url.replace('https://', '')}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Technology Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our ecosystem</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Representative categories of tools and platforms we integrate
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {partners.categories.map((cat) => (
              <motion.div key={cat.h} className="relative group" variants={fadeIn}>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-panel-glow rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-blue-400 to-violet-400"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{cat.h}</h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-2"></div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-neutral-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-300 bg-clip-text text-transparent">
              Become a partner
            </span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10">
            Interested in partnering with CyberGlobal AI? Let&apos;s explore how we can work together.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-violet-500 via-violet-600 to-blue-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
          >
            <span>{partners.cta}</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

