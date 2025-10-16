import { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { ServicesContent } from "@/components/ServicesContent";
import { services } from "@/content/services";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/services";
  
  return {
    title: "AI Services — IDP, LLMs, RAG, Automation",
    description: "Private, compliant AI solutions: document processing, on-prem LLM deployment, semantic search, workflow automation, and compliance tools.",
    keywords: ["AI services", "IDP", "on-prem LLM", "RAG search", "workflow automation", "document processing", "private AI"],
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
    openGraph: {
      title: "AI Services — IDP, LLMs, RAG, Automation",
      description: "Private, compliant AI solutions: document processing, on-prem LLM deployment, semantic search, workflow automation, and compliance tools.",
      url: canonicalFor(path),
      type: "website",
    },
  };
}

export default function ServicesPage() {
  const pageSchema = webPageSchema(
    "AI Services - CyberGlobal AI",
    "Private, compliant AI solutions: document processing, on-prem LLMs, search, automation, and compliance.",
    "/services"
  );
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ]);
  const servicesSchemas = services.map((s) => 
    serviceSchema(s.name, s.items.find(i => i.k === "Solution")?.v || "")
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbs} />
      {servicesSchemas.map((schema, i) => <JsonLd key={i} data={schema} />)}
      <ServicesContent />
    </>
  );
}

