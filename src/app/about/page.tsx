import { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { AboutContent } from "@/components/AboutContent";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/about";
  
  return {
    title: "About CyberGlobal AI — Secure AI Delivery",
    description: "We bring enterprise‑grade AI to regulated teams — with privacy, security, and measurable impact as first principles. Part of CyberGlobal.",
    keywords: ["AI consulting", "private AI", "enterprise AI", "secure AI delivery", "on-prem AI", "CyberGlobal"],
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
    openGraph: {
      title: "About CyberGlobal AI — Secure AI Delivery",
      description: "We bring enterprise‑grade AI to regulated teams — with privacy, security, and measurable impact as first principles.",
      url: canonicalFor(path),
      type: "website",
    },
  };
}

export default function AboutPage() {
  const pageSchema = webPageSchema(
    "About Us - CyberGlobal AI",
    "We bring enterprise‑grade AI to regulated teams — with privacy, security, and measurable impact as first principles.",
    "/about"
  );
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbs} />
      <AboutContent />
    </>
  );
}

