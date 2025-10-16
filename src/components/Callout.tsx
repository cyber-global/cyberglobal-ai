'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from './Container';

interface CalloutProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  variant?: 'default' | 'muted';
}

export function Callout({
  title,
  description,
  ctaText,
  ctaHref,
  variant = 'default',
}: CalloutProps) {
  return (
    <section
      className={`py-16 sm:py-20 ${
        variant === 'muted' ? 'bg-muted/50' : 'bg-primary/5'
      }`}
    >
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {description}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

