import type { Metadata } from "next";
import { pentx } from "@/content/products/pentx";
import { PentXContent } from "@/components/products/PentXContent";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/products/pentx";
  
  return {
    title: "PentX — AI Penetration Testing in Minutes",
    description: pentx.seo.description,
    keywords: pentx.seo.keywords,
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
    openGraph: {
      title: "PentX — AI Penetration Testing in Minutes",
      description: pentx.seo.description,
      url: canonicalFor(path),
      type: "article",
    },
  };
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "PentX",
  "description": pentx.seo.description,
  "brand": {
    "@type": "Brand",
    "name": "CyberGlobal AI"
  },
  "category": "Security Software",
  "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://cybergl.ai"}/products/pentx`,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD"
    }
  }
};

export default function PentXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PentXContent />
    </>
  );
}
