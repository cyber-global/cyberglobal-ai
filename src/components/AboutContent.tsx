"use client";

import { about } from "@/content/about";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const founders = [
  {
    name: "Daniel Ciobanu",
    role: "CEO",
    image: "/daniel-ciobanu.png",
    linkedin: "https://www.linkedin.com/in/ciobanudaniel/"
  },
  {
    name: "Andrei Pusoiu",
    role: "COO",
    image: "/andrei-pusoiu.jpeg",
    linkedin: "https://www.linkedin.com/in/andreipusoiu/"
  },
  {
    name: "Charles Grandjean",
    role: "AI Architect",
    image: "/charles-grandjean.jpeg",
    linkedin: "https://www.linkedin.com/in/charles-g-207b74199/"
  },
  {
    name: "Daniel Cioca",
    role: "Automation Architect",
    image: "/daniel-cioca.png",
    linkedin: "https://www.linkedin.com/in/nicolae-daniel-c-247599173"
  }
];

export function AboutContent() {
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
                <span className="text-sm font-medium text-blue-400">About Us</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              {about.hero.title}
            </h1>
            
            <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
              {about.hero.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Part of CyberGlobal */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div className="relative glass-panel-glow rounded-2xl p-10 md:p-12 z-10">
              <div className="flex flex-col md:flex-row items-start gap-8 relative z-20">
                {/* CyberGlobal Logo */}
                <Link 
                  href="https://cybergl.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group/logo"
                >
                  <div className="w-32 h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-4 group-hover/logo:border-violet-400/50 transition-colors">
                    <Image
                      src="/Logo WHITE - CyberGlobal AI.png"
                      alt="CyberGlobal logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </Link>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Part of CyberGlobal</h2>
                    <Link 
                      href="https://cybergl.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      <span>cybergl.com</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                    CyberGlobal AI is a specialized division of CyberGlobal, a global technology consulting and digital transformation firm. We leverage decades of enterprise security expertise, combining it with cutting-edge AI capabilities to deliver private, compliant solutions for highly regulated industries worldwide.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                      Enterprise Consulting
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                      Security-First
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                      Global Presence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
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
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Meet the founders</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Decades of combined experience in AI, security, and enterprise systems
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {founders.map((founder) => (
              <motion.div key={founder.name} variants={fadeIn}>
                <div className="glass-panel rounded-xl overflow-hidden hover:bg-white/5 transition-colors">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-500/10 to-violet-500/10">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                    <div className="text-sm text-blue-400 font-medium mb-4">{founder.role}</div>
                    
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What drives us</h2>
          </motion.div>

          <motion.div 
            className="grid gap-8 lg:grid-cols-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="relative group" variants={fadeIn}>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative glass-panel-glow rounded-xl p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Mission</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed">{about.mission}</p>
              </div>
            </motion.div>

            <motion.div className="relative group" variants={fadeIn}>
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative glass-panel-glow rounded-xl p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed">{about.vision}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Core Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our values</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">The principles that guide everything we build</p>
          </motion.div>

          <motion.div 
            className="grid gap-6 md:grid-cols-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {about.values.map((v) => (
              <motion.div key={v.name} className="relative group" variants={fadeIn}>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-panel-glow rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-blue-400 to-violet-400"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{v.name}</h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-3"></div>
                      <p className="text-neutral-300 leading-relaxed">{v.copy}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative glass-panel-glow rounded-2xl p-10 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Our Reach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Global, local</h2>
              <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                {about.presence}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-violet-500/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl"></div>
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
              Ready to work together?
            </span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10">
            Let&apos;s discuss how we can help you deploy private AI securely and effectively.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
            >
              <span>Start a conversation</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-blue-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
            >
              <span>View our services</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

