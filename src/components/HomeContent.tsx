"use client";

import { home } from "@/content/home";
import Link from "next/link";
import { motion } from "framer-motion";
import { events } from "@/lib/events";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

interface HomeContentProps {
  heroData?: typeof home;
}

export function HomeContent({ heroData = home }: HomeContentProps) {
  const content = heroData;
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden min-h-[600px]">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div {...fadeIn}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-400">Private AI Infrastructure</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Private, compliant AI that{" "}
              <span className="gradient-text">unlocks your documents & workflows</span>.
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
              {content.hero.sub}
            </p>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/contact" 
                prefetch={true}
                onClick={() => events.ctaClick("hero", "Book a discovery call")}
                className="group inline-flex items-center gap-2 rounded-lg px-6 py-3.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
              >
                <span>Book a discovery call</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/services" 
                prefetch={true} 
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 border border-white/20 hover:border-blue-400/50 font-medium hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
              >
                <span>Explore services</span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SOC 2 compliant
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                On-prem ready
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-panel-glow rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Quick Deploy</div>
                  <div className="text-sm text-neutral-400">Production-ready infrastructure</div>
                </div>
              </div>
              
              {home.hero.stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="text-sm text-neutral-400 mb-1">{s.label}</div>
                    <div className="text-lg font-semibold bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent">
                      {s.value}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Trusted by</div>
                <div className="flex gap-2 text-xs text-neutral-400">
                  <span className="px-2 py-1 rounded bg-white/5">Finance</span>
                  <span className="px-2 py-1 rounded bg-white/5">Healthcare</span>
                  <span className="px-2 py-1 rounded bg-white/5">Legal</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem -> Solution */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              The Challenge & Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">From problem to solution</h2>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 lg:grid-cols-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="relative group" variants={fadeIn}>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative glass-panel-glow rounded-xl p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">The problem</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed">{content.problem}</p>
              </div>
            </motion.div>
            
            <motion.div className="relative group" variants={fadeIn}>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative glass-panel-glow rounded-xl p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Your guide</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed">{content.guide}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Plan */}
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
              Proven Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Your path to private AI</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">Three clear steps from discovery to production deployment</p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-blue-500/20 transform -translate-y-1/2"></div>
            
            <div className="grid gap-8 md:grid-cols-3 relative">
              {home.plan.map((step, i) => (
                <motion.div 
                  key={i} 
                  className="relative group"
                  variants={fadeIn}
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative glass-panel-glow rounded-xl p-8 h-full">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-xl mb-6 shadow-lg shadow-blue-500/20">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">{step.copy}</p>
                    
                    {/* Progress arrow for non-last items */}
                    {i < home.plan.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 rounded-full bg-[#0B0B0F] flex items-center justify-center border border-blue-500/30">
                          <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What we deliver</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">Private AI solutions designed for regulated industries</p>
          </motion.div>
          
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {content.services.map((s) => (
              <motion.div key={s.title} variants={fadeIn}>
                <Link 
                  href="/services" 
                  prefetch={true} 
                  className="block glass-panel-glow rounded-xl p-8 group hover:scale-[1.03] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-violet-400"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                        {s.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {s.copy}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            className="grid gap-10 lg:grid-cols-5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Left: Trust badges */}
            <motion.div className="lg:col-span-2" variants={fadeIn}>
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Security & Trust
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Built for compliance</h2>
                <div className="space-y-4">
                  {home.proof.map((p, idx) => (
                    <motion.div 
                      key={p}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg glass-panel group hover:bg-white/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-200 leading-relaxed">{p.replace('✓ ', '').replace('Security‑first', 'Security-first').replace('Audit‑ready', 'Audit-ready')}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right: Testimonial */}
            <motion.div className="lg:col-span-3" variants={fadeIn}>
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-panel-glow rounded-2xl p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-8">
                      <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <blockquote className="text-neutral-100 text-xl md:text-2xl leading-relaxed font-medium mb-8">
                      {home.testimonial.quote}
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                      {home.testimonial.attribution.split(',')[0].trim().split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{home.testimonial.attribution.split(',')[0]}</div>
                      <div className="text-sm text-neutral-400">{home.testimonial.attribution.split(',').slice(1).join(',')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Premium Treatment */}
      <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/10">
        {/* Dramatic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-violet-500/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          className="mx-auto max-w-5xl px-6 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/10 to-violet-500/10 backdrop-blur-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Ready to Transform
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-300 bg-clip-text text-transparent">
              Imagine the outcome
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {home.success}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link 
              href="/contact" 
              prefetch={true} 
              className="group inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
            >
              <span>Schedule a demo</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/case-studies" 
              prefetch={true} 
              className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-blue-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
            >
              <span>View case studies</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>2-6 week pilots</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SOC 2 compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

