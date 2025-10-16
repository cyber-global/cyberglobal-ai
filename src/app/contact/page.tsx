import { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact CyberGlobal AI — book a discovery call",
  description: "Tell us about your documents, data, or workflows. We'll propose a scoped pilot with timelines and outcomes. Schedule a call or send a message.",
  keywords: ["contact AI consulting", "book AI consultation", "AI discovery call", "private AI demo", "enterprise AI contact"],
  openGraph: {
    title: "Contact CyberGlobal AI — book a discovery call",
    description: "Tell us about your documents, data, or workflows. We'll propose a scoped pilot with timelines and outcomes.",
    url: "https://www.cybergl.com/contact",
  }
};

export default function ContactPage() {
  const pageSchema = webPageSchema(
    "Contact Us - CyberGlobal AI",
    "Tell us about your documents, data, or workflows. We'll propose a scoped pilot with timelines and outcomes.",
    "/contact"
  );
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbs} />
      <ContactContent />
    </>
  );
}

