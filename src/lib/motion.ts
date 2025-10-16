// Framer Motion variants with prefers-reduced-motion support

// Check if user prefers reduced motion
function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Subtle entrance animation (fade + translateY)
export const fadeInUp = {
  initial: shouldReduceMotion() 
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 8 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: shouldReduceMotion() ? 0 : 0.4,
      ease: [0.34, 1.56, 0.64, 1], // Spring easing
    }
  },
  viewport: { once: true, margin: "-50px" }
};

// Stagger container (for lists/grids)
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: shouldReduceMotion() ? 0 : 0.05,
    }
  }
};

// Card entrance
export const cardVariant = {
  initial: shouldReduceMotion()
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion() ? 0 : 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    }
  }
};

// CTA entrance
export const ctaVariant = {
  initial: shouldReduceMotion()
    ? { opacity: 1, scale: 1 }
    : { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: shouldReduceMotion() ? 0 : 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    }
  }
};

// Hero section entrance
export const heroVariant = {
  initial: shouldReduceMotion()
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion() ? 0 : 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    }
  }
};

