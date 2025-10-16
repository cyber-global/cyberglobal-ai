import { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { BusinessImpactContent } from "@/components/BusinessImpactContent";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/business-impact";
  
  return {
    title: "AI Business Value — Outcomes & Maturity",
    description: "From unstructured documents to automated decisions, learn how private AI compounds ROI safely. Outcomes, maturity model, and implementation guidance.",
    keywords: ["AI business value", "AI ROI", "AI maturity model", "AI outcomes", "private AI benefits"],
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
    openGraph: {
      title: "AI Business Value — Outcomes & Maturity",
      description: "From unstructured documents to automated decisions, learn how private AI compounds ROI safely.",
      url: canonicalFor(path),
      type: "website",
    },
  };
}

export default function ImpactPage() {
  const pageSchema = webPageSchema(
    "Business Impact - CyberGlobal AI",
    "From unstructured documents to automated decisions, learn how private AI compounds ROI safely.",
    "/business-impact"
  );
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Business Impact", url: "/business-impact" }
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbs} />
      <BusinessImpactContent />
    </>
  );
}

