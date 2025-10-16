import { home } from "@/content/home";
import { verticals } from "@/content/verticals";
import { JsonLd, webPageSchema, breadcrumbSchema, organizationSchema, serviceSchema } from "@/lib/jsonld";
import { HomeContent } from "@/components/HomeContent";

export default async function HomePage({ searchParams }: { searchParams: Promise<{ v?: string }> }) {
  // Await searchParams in Next.js 15
  const params = await searchParams;
  
  // Check for industry vertical parameter
  const vertical = params?.v && params.v in verticals 
    ? verticals[params.v as keyof typeof verticals]
    : null;
  
  // Use vertical-specific hero or default
  const heroContent = vertical ? { ...home, hero: vertical.hero } : home;
  const pageSchema = webPageSchema(
    "CyberGlobal AI - Private, Compliant AI Solutions",
    "Private, compliant AI that unlocks your documents and workflows.",
    ""
  );
  const breadcrumbs = breadcrumbSchema([{ name: "Home", url: "/" }]);
  
  // Service JSON-LD schemas for each service on homepage
  const serviceSchemas = heroContent.services.map((s) => 
    serviceSchema(s.title, s.copy)
  );

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbs} />
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <HomeContent heroData={heroContent} />
    </>
  );
}
