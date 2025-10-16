import { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { CaseStudiesContent } from "@/components/CaseStudiesContent";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/case-studies";
  
  return {
    title: "Case Studies — Measurable AI Impact",
    description: "Selected examples showing speed, quality, and compliance results. KYC automation, regulatory Q&A, and workflow automation case studies.",
    keywords: ["AI case studies", "private AI results", "on-prem LLM success", "AI implementation examples", "enterprise AI"],
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
    openGraph: {
      title: "Case Studies — Measurable AI Impact",
      description: "Selected examples showing speed, quality, and compliance results from our AI implementations.",
      url: canonicalFor(path),
      type: "website",
    },
  };
}

export default function CaseStudies() {
  const pageSchema = webPageSchema(
    "Case Studies - CyberGlobal AI",
    "Selected examples showing speed, quality, and compliance results from our AI implementations.",
    "/case-studies"
  );
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" }
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbs} />
      <CaseStudiesContent />
    </>
  );
}

