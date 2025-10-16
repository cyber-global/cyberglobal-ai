'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo {
  name: string;
  src: string;
  url?: string;
}

interface LogoCloudProps {
  title?: string;
  logos: Logo[];
}

export function LogoCloud({ title, logos }: LogoCloudProps) {
  return (
    <div className="py-12">
      {title && (
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center justify-center"
          >
            {logo.url ? (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>
            ) : (
              <div className="grayscale opacity-60">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

