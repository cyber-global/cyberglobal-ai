import { Metadata } from "next";
import Link from "next/link";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/terms";
  
  return {
    title: "Terms of Service — CyberGlobal AI",
    description: "Terms and conditions for using CyberGlobal AI services and website.",
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
  };
}

export default function TermsPage() {
  const lastUpdated = "October 16, 2025";
  
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-neutral-400 mb-12">Last updated: {lastUpdated}</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-neutral-300 leading-relaxed">
            By accessing and using{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">cybergl.ai</Link>
            {" "}and our{" "}
            <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">services</Link>
            , you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            CyberGlobal AI provides enterprise AI solutions including:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li>Document processing and intelligent data extraction</li>
            <li>On-premises LLM deployment and RAG implementation</li>
            <li>Workflow automation and process optimization</li>
            <li>AI consulting and implementation services</li>
            <li>Security testing via our{" "}
              <Link href="/products/pentx" className="text-blue-400 hover:text-blue-300 transition-colors">PentX product</Link>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mt-4">
            Full details available on our{" "}
            <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">Services page</Link>.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Use of Website</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            You agree to use our website only for lawful purposes. You may not:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Submit false, misleading, or malicious information</li>
            <li>Use automated tools to scrape or harvest data</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Service Agreements</h2>
          <p className="text-neutral-300 leading-relaxed">
            Professional services are governed by separate service agreements. These terms apply to website use only. For enterprise engagements, custom terms, SLAs, and data processing agreements will be established. Please{" "}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">contact us</Link>
            {" "}to discuss your specific requirements.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-neutral-300 leading-relaxed">
            All content on this website, including text, graphics, logos, and software, is the property of CyberGlobal AI LTD or its licensors and is protected by international copyright and trademark laws. You may not reproduce, distribute, or create derivative works without explicit permission.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Data Privacy & Security</h2>
          <p className="text-neutral-300 leading-relaxed">
            We take data privacy seriously. Our{" "}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>
            {" "}explains how we handle your personal information. For client projects, we offer:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2 mt-4">
            <li>On-premises deployment (your data never leaves your infrastructure)</li>
            <li>SOC 2, ISO 27001, GDPR, HIPAA compliance options</li>
            <li>Custom data processing agreements</li>
            <li>Audit trails and access controls</li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="text-neutral-300 leading-relaxed">
            To the maximum extent permitted by law, CyberGlobal AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services. Website content is provided &ldquo;as is&rdquo; without warranties of any kind.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-neutral-300 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the modified terms.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-neutral-300 leading-relaxed">
            These terms are governed by the laws of Romania. Any disputes shall be resolved in the courts of Cluj-Napoca, Romania.
          </p>
          <p className="text-neutral-300 leading-relaxed mt-4">
            <strong>Legal Entity:</strong> CyberGlobal AI LTD<br />
            <strong>Registration:</strong> J12/2268/2023<br />
            <strong>CUI:</strong> 48213020
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8 bg-blue-500/5 border-blue-500/20">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Questions about these terms? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@cybergl.ai"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 border border-white/20 hover:border-blue-400/50 font-semibold hover:bg-white/5 transition-all"
            >
              <span>info@cybergl.ai</span>
            </a>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-neutral-400">
            See also:{" "}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

