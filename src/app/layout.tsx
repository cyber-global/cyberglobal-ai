import type { Metadata } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import "./../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipNav } from "@/components/SkipNav";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Providers } from "@/components/Providers";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/jsonld";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cybergl.ai"),
  title: {
    default: "Private AI for Documents & Workflows",
    template: "%s | CyberGlobal AI"
  },
  description: "We deploy private, compliant AI that extracts, searches, and automates — without sending your sensitive data to public models. On-prem or private cloud.",
  keywords: ["private AI", "compliant AI", "on-prem LLM", "document AI", "workflow automation", "RAG search", "enterprise AI", "data sovereignty"],
  alternates: {
    canonical: canonicalFor(""),
  },
  robots: getRobotsMeta(),
  openGraph: {
    type: "website",
    siteName: "CyberGlobal AI",
    title: "Private AI for Documents & Workflows",
    description: "Deploy private, compliant AI that extracts, searches, and automates — without sending your sensitive data to public models.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private AI for Documents & Workflows",
    description: "Deploy private AI that respects your data sovereignty. On-prem or private cloud.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Icon Blue - CyberGlobal.svg" type="image/svg+xml" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} antialiased`} style={{ backgroundColor: '#0B0B0F', color: '#f5f5f5' }} suppressHydrationWarning>
        <SkipNav />
        <Header />
        <main id="main-content" className="relative z-10">{children}</main>
        <Footer />
        <ConsentBanner />
        <Providers />
      </body>
    </html>
  );
}
