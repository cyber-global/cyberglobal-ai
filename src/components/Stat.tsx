'use client';

import { motion } from 'framer-motion';

interface StatProps {
  value: string;
  label: string;
  delay?: number;
}

export function Stat({ value, label, delay = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
        {value}
      </div>
      <div className="mt-2 text-sm text-muted-foreground sm:text-base">{label}</div>
    </motion.div>
  );
}

