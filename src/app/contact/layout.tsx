import { Metadata } from "next";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/contact";
  
  return {
    title: "Contact Us — Book a Discovery Call",
    description: "Tell us about your documents, data, or workflows. We'll propose a scoped pilot with timelines and outcomes. Schedule a call or send a message.",
    keywords: ["contact AI consulting", "book AI consultation", "AI discovery call", "private AI demo", "enterprise AI contact"],
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
    openGraph: {
      title: "Contact Us — Book a Discovery Call",
      description: "Tell us about your documents, data, or workflows. We'll propose a scoped pilot with timelines and outcomes.",
      url: canonicalFor(path),
      type: "website",
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

