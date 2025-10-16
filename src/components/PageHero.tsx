"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  sub: string;
  primaryCtaHref: string;
  secondaryCtaHref?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export function PageHero({
  title,
  sub,
  primaryCtaHref,
  secondaryCtaHref,
  primaryCtaText = "Get Started",
  secondaryCtaText = "Learn More",
}: PageHeroProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg text-neutral-300 sm:text-xl leading-relaxed"
          >
            {sub}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white bg-gradient-to-br from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all"
            >
              {primaryCtaText}
            </Link>
            
            {secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium border border-white/20 hover:border-white/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

