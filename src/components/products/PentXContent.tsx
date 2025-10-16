"use client";

import { pentx } from "@/content/products/pentx";
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

export function PentXContent() {
  return (
    <>
      {/* Hero with Video */}
      <section className="pt-24 pb-16 relative overflow-hidden min-h-[600px]">
        {/* Morphing Blobs Background */}
        <div className="ai-bg-morph">
          <div className="morph-blob morph-blob-1"></div>
          <div className="morph-blob morph-blob-2"></div>
          <div className="morph-blob morph-blob-3"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div {...fadeIn}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                  <Image 
                    src="/pentx-logoWhite.svg" 
                    alt="PentX" 
                    width={60} 
                    height={20} 
                    className="h-5 w-auto"
                  />
                  <div className="w-1 h-4 bg-white/20"></div>
                  <span className="text-sm font-medium text-blue-400">{pentx.hero.eyebrow.split(' / ')[1]}</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                {pentx.hero.h1}
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
                {pentx.hero.sub}
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={pentx.hero.primaryCta.href}
                  className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
                >
                  <span>{pentx.hero.primaryCta.label}</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  href={pentx.hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-blue-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
                >
                  <span>{pentx.hero.secondaryCta.label}</span>
                </Link>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-sm text-neutral-400"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>60+ Certified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>53,481 Reports Analyzed</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Video Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative glass-panel-glow rounded-2xl p-4 overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full rounded-xl object-cover"
                    poster="/pentx-logoWhite.svg"
                    width="100%"
                    height="100%"
                  >
                    <source src="/pentx-presentation.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
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
              The Challenge & Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why PentX?</h2>
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
                <p className="text-neutral-300 text-lg leading-relaxed">{pentx.problem}</p>
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
                    <h3 className="text-2xl font-semibold mb-2">How PentX helps</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed">{pentx.guide}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process - Vertical Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Testing in Three Steps</h2>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-blue-500/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {pentx.plan.map((step, i) => {
                const icons = [
                  // Step 1: Target/Scope icon
                  <svg key="1" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>,
                  // Step 2: AI Execution icon
                  <svg key="2" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>,
                  // Step 3: Report icon
                  <svg key="3" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ];
                
                return (
                  <motion.div key={i} className="relative md:pl-24" variants={fadeIn}>
                    {/* Number badge */}
                    <div className="absolute left-0 md:left-2 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex flex-col items-center justify-center text-white shadow-xl shadow-blue-500/30">
                      <div className="mb-1">{icons[i]}</div>
                    </div>
                    
                    <div className="glass-panel-glow rounded-xl p-8 hover:scale-[1.02] transition-transform">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-4"></div>
                          <p className="text-neutral-300 leading-relaxed">{step.copy}</p>
                        </div>
                        <div className="text-6xl font-bold text-white/5">{i + 1}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits - Large Icons Layout */}
      <section className="py-20 relative" id="benefits">
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
              Key Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover the Benefits of PentX</h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">{pentx.benefitsIntro}</p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {pentx.benefits.map((b, idx) => {
              const benefitIcons = [
                <svg key="1" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                <svg key="2" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                <svg key="3" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                <svg key="4" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              ];
              
              return (
                <motion.div key={b.title} className="relative group" variants={fadeIn}>
                  <div className="glass-panel rounded-xl p-6 text-center hover:bg-white/5 transition-all">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center p-4 group-hover:scale-110 transition-transform">
                      <div className="text-blue-400">
                        {benefitIcons[idx]}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{b.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{b.copy}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Capabilities - Accordion Style */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{pentx.capabilitiesTitle}</h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {pentx.capabilities.map((cap, idx) => {
              const capIcons = [
                <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
                <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
                <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                <svg key="5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              ];
              
              return (
                <motion.div key={cap.h} className="glass-panel rounded-xl hover:bg-white/5 transition-all" variants={fadeIn}>
                  <div className="p-6 md:p-8 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                        {capIcons[idx]}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">{cap.h}</h3>
                      <p className="text-neutral-300 leading-relaxed">{cap.p}</p>
                    </div>
                    <div className="hidden md:block text-4xl font-bold text-white/5">{String(idx + 1).padStart(2, '0')}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Ongoing Protection */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Continuous Security
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Ongoing Protection</h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {pentx.ongoingProtection.map((item) => (
              <motion.div key={item} variants={fadeIn} className="glass-panel rounded-lg p-6 flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-neutral-200 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Frameworks & Standards
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{pentx.complianceTitle}</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">{pentx.complianceIntro}</p>
          </motion.div>

          <motion.div
            className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {pentx.compliance.map((c) => (
              <motion.div key={c.name} variants={fadeIn} className="glass-panel rounded-lg p-6 text-center group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-semibold text-white mb-1">{c.name}</div>
                <div className="text-sm text-neutral-400">{c.copy}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas */}
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
              Testing Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{pentx.coverageTitle}</h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {pentx.coverage.map((c) => (
              <motion.div key={c.area} className="relative group" variants={fadeIn}>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-panel-glow rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">{c.area}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-6"></div>
                  <ul className="space-y-3 mb-6">
                    {c.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-neutral-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-neutral-400 italic leading-relaxed">{c.summary}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20" id="comparison">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Comparison
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{pentx.comparisonTitle}</h2>
            <p className="text-sm text-neutral-400 max-w-3xl mx-auto">{pentx.comparisonNote}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative glass-panel-glow rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="p-6 text-left text-neutral-400 font-medium">Comparison Factor</th>
                      <th className="p-6 text-left font-semibold text-neutral-300">Traditional Methods</th>
                      <th className="p-6 text-left font-semibold bg-gradient-to-br from-blue-500/10 to-violet-500/10">
                        <div className="flex items-center gap-2">
                          <Image 
                            src="/pentx-logoWhite.svg" 
                            alt="PentX AI Platform" 
                            width={80} 
                            height={24} 
                            className="h-6 w-auto"
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pentx.comparisonTable.map(([k, a, b], idx) => (
                      <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 font-medium text-white">{k}</td>
                        <td className="p-6 text-neutral-300">{a}</td>
                        <td className="p-6 text-blue-400 font-medium">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{pentx.faqTitle}</h2>
            <p className="text-neutral-400">{pentx.faqIntro}</p>
          </motion.div>

          <div className="space-y-4">
            {pentx.faqs.map((f) => (
              <div key={f.q} className="glass-panel rounded-xl p-6 hover:bg-white/5 transition-colors">
                <div className="font-semibold text-lg text-white mb-3">{f.q}</div>
                <p className="text-neutral-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-300 bg-clip-text text-transparent">
              {pentx.success}
            </span>
          </h2>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={pentx.primaryCta.href}
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
            >
              <span>{pentx.primaryCta.label}</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href={pentx.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-blue-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
            >
              <span>{pentx.secondaryCta.label}</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

