// SEO utility functions for JSON-LD structured data and metadata

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cybergl.ai";

// Utility: Generate canonical URL
export function canonicalFor(path: string): string {
  return `${baseUrl}${path}`;
}

// Utility: Check if should NOINDEX (for preview/dev deployments)
export function shouldNoIndex(): boolean {
  return process.env.VERCEL_ENV !== "production";
}

// Utility: Get robots meta based on environment
export function getRobotsMeta() {
  if (shouldNoIndex()) {
    return {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    };
  }
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  };
}

// Organization JSON-LD (for homepage)
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CyberGlobal AI",
    "url": baseUrl,
    "logo": `${baseUrl}/Logo WHITE - CyberGlobal AI.png`,
    "description": "We deploy private, compliant AI that extracts, searches, and automates — without sending your sensitive data to public models.",
    "foundingDate": "2019",
    "slogan": "Private, compliant AI for documents & workflows",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "info@cybergl.ai",
        "telephone": "+40752607204",
        "url": `${baseUrl}/contact`,
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@cybergl.ai",
        "telephone": "+40752607204",
        "url": `${baseUrl}/contact`,
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/cyberglobal-ai",
      "https://twitter.com/cyberglobalai",
      "https://github.com/cyberglobal-ai"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cluj-Napoca",
      "addressRegion": "Cluj",
      "addressCountry": "RO"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "name": "Worldwide"
    },
    "legalName": "CyberGlobal AI LTD",
    "taxID": "48213020",
    "vatID": "RO48213020"
  };
}

// Service JSON-LD
export function serviceJsonLd(service: { name: string; description: string; category?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "category": service.category || "AI Solutions",
    "provider": {
      "@type": "Organization",
      "name": "CyberGlobal AI",
      "url": baseUrl
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${baseUrl}/contact`
    }
  };
}

// Breadcrumb JSON-LD
export function breadcrumbJsonLd(segments: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": segments.map((segment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segment.name,
      "item": `${baseUrl}${segment.path}`
    }))
  };
}

// WebPage JSON-LD
export function webPageJsonLd({ title, description, path }: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `${baseUrl}${path}`,
    "isPartOf": {
      "@type": "WebSite",
      "url": baseUrl,
      "name": "CyberGlobal AI"
    }
  };
}

// Product JSON-LD
export function productJsonLd(product: { 
  name: string; 
  description: string; 
  category: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "CyberGlobal AI"
    },
    "category": product.category,
    "url": `${baseUrl}${product.path}`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  };
}

// FAQ JSON-LD
export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
