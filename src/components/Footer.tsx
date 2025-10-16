import Link from "next/link";
import Image from "next/image";

export const Footer = () => (
  <footer className="border-t border-white/10 mt-24" role="contentinfo">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-12">
        {/* Logo & Description */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/Logo WHITE - CyberGlobal AI.png"
              alt="CyberGlobal AI"
              width={160}
              height={36}
              className="h-7 w-auto"
            />
          </Link>
          <p className="text-sm text-neutral-400 leading-relaxed mb-6">
            Private, compliant AI that unlocks your documents & workflows.
          </p>
          
          {/* Contact Details */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-neutral-300">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@cybergl.ai" className="hover:text-blue-400 transition-colors">
                info@cybergl.ai
              </a>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+40752607204" className="hover:text-blue-400 transition-colors">
                +40 752 607 204
              </a>
            </div>
            <div className="flex items-start gap-2 text-neutral-300">
              <svg className="w-4 h-4 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div>
                <div>Constantin Brancusi 78</div>
                <div>Cluj-Napoca, Romania</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <nav aria-label="Company links" className="md:col-span-2">
          <div className="text-sm uppercase tracking-wider text-neutral-400 mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-neutral-300 hover:text-blue-400 transition-colors">About</Link></li>
            <li><Link href="/services" className="text-neutral-300 hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link href="/partners" className="text-neutral-300 hover:text-blue-400 transition-colors">Partners</Link></li>
            <li><Link href="/contact" className="text-neutral-300 hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* Products */}
        <nav aria-label="Product links" className="md:col-span-2">
          <div className="text-sm uppercase tracking-wider text-neutral-400 mb-4">Products</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products/pentx" className="text-neutral-300 hover:text-blue-400 transition-colors">PentX</Link></li>
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="Resource links" className="md:col-span-2">
          <div className="text-sm uppercase tracking-wider text-neutral-400 mb-4">Resources</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/business-impact" className="text-neutral-300 hover:text-blue-400 transition-colors">Business Impact</Link></li>
            <li><Link href="/case-studies" className="text-neutral-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>
          </ul>
        </nav>

        {/* Legal */}
        <nav aria-label="Legal links" className="md:col-span-2">
          <div className="text-sm uppercase tracking-wider text-neutral-400 mb-4">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="text-neutral-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-neutral-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} CyberGlobal AI LTD. All rights reserved.</p>
          <p>CUI: 48213020 | Reg. No: J12/2268/2023</p>
        </div>
      </div>
    </div>
  </footer>
);

