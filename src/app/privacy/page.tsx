import { Metadata } from "next";
import Link from "next/link";
import { canonicalFor, getRobotsMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const path = "/privacy";
  
  return {
    title: "Privacy Policy — CyberGlobal AI",
    description: "Learn how CyberGlobal AI collects, uses, and protects your personal information. GDPR and CCPA compliant.",
    alternates: {
      canonical: canonicalFor(path),
    },
    robots: getRobotsMeta(),
  };
}

export default function PrivacyPage() {
  const lastUpdated = "October 16, 2025";
  
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-neutral-400 mb-12">Last updated: {lastUpdated}</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-neutral-300 leading-relaxed">
            CyberGlobal AI LTD (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">cybergl.ai</Link>
            {" "}or use our{" "}
            <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">services</Link>.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When you contact us through our{" "}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">contact form</Link>
            , we collect:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name (optional)</li>
            <li>Message content</li>
            <li>IP address (for rate limiting and security)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">
            With your consent, we collect:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li>Analytics data (via Vercel Analytics)</li>
            <li>Performance metrics (via Vercel Speed Insights)</li>
            <li>Error logs (via Sentry, for debugging)</li>
            <li>Browser type and device information</li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and{" "}
              <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">services</Link>
            </li>
            <li>Monitor and analyze usage patterns</li>
            <li>Detect and prevent fraudulent or malicious activity</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-neutral-300 leading-relaxed">
            We implement industry-standard security measures including encryption, secure data transmission (HTTPS), rate limiting, and regular security audits. For our{" "}
            <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">AI services</Link>
            , we offer on-premises and private cloud deployment options to ensure your data never leaves your infrastructure.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li><strong>Resend</strong> - Email delivery for contact form submissions</li>
            <li><strong>Cal.com</strong> - Meeting scheduling (embedded widget)</li>
            <li><strong>Vercel Analytics</strong> - Privacy-first website analytics (with consent)</li>
            <li><strong>Sentry</strong> - Error monitoring and performance tracking</li>
            <li><strong>hCaptcha</strong> - Bot protection for forms</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mt-4">
            Each service has its own privacy policy. We only share the minimum necessary data.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights (GDPR & CCPA)</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mt-4">
            To exercise these rights, please{" "}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">contact us</Link>.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-neutral-300 leading-relaxed">
            We use minimal cookies for:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2 my-4">
            <li><strong>Consent management</strong> - Remembering your cookie preferences (localStorage)</li>
            <li><strong>Analytics</strong> - Understanding site usage (only with consent)</li>
            <li><strong>Session management</strong> - Maintaining form state</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            You can manage your cookie preferences through your browser settings.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p className="text-neutral-300 leading-relaxed">
            We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Contact form submissions are retained for up to 2 years for customer relationship management purposes.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul className="space-y-2 text-neutral-300">
            <li><strong>Email:</strong> <a href="mailto:info@cybergl.ai" className="text-blue-400 hover:text-blue-300 transition-colors">info@cybergl.ai</a></li>
            <li><strong>Phone:</strong> <a href="tel:+40752607204" className="text-blue-400 hover:text-blue-300 transition-colors">+40 752 607 204</a></li>
            <li><strong>Legal Entity:</strong> CyberGlobal AI LTD, CUI 48213020</li>
            <li>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 mt-2">
                <span>Contact Form</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-neutral-400">
            See also:{" "}
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

