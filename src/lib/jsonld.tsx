// JSON-LD structured data for SEO

const baseUrl = "https://cybergl.ai";

export const organizationSchema = {
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
      "url": `${baseUrl}/contact`,
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
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
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "name": "Worldwide"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CyberGlobal AI",
  "url": baseUrl,
  "description": "Private, compliant AI that unlocks your documents and workflows.",
  "publisher": {
    "@type": "Organization",
    "name": "CyberGlobal AI"
  }
};

export function webPageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `${baseUrl}${path}`,
    "isPartOf": {
      "@type": "WebSite",
      "url": baseUrl
    }
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
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

// Helper to render JSON-LD script tag
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

