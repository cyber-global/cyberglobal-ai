import { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { PartnersContent } from "@/components/PartnersContent";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/partners";
  
  return {
    title: "Partners & Integrations — Our Ecosystem",
    description: "We work with industry leaders including CyberGlobal, PentX AI, CTDefense, Cube-Enterprise, and CyberLegal to deliver comprehensive AI solutions.",
    keywords: ["AI partners", "technology integrations", "CyberGlobal", "PentX AI", "CTDefense", "enterprise partners"],
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
    openGraph: {
      title: "Partners & Integrations — Our Ecosystem",
      description: "We work with industry leaders to deliver comprehensive, secure AI solutions.",
      url: canonicalFor(path),
      type: "website",
    },
  };
}

export default function PartnersPage() {
  const pageSchema = webPageSchema(
    "Partners & Integrations - CyberGlobal AI",
    "We work with industry leaders to deliver comprehensive, secure AI solutions.",
    "/partners"
  );
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Partners", url: "/partners" }
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbs} />
      <PartnersContent />
    </>
  );
}

