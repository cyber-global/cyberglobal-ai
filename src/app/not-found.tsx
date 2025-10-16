import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
      {/* AI Abstract Background */}
      <div className="ai-bg-float">
        <div className="float-orb float-orb-1"></div>
        <div className="float-orb float-orb-2"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-violet-400 bg-clip-text text-transparent">
              404
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Page Not Found
        </h1>
        
        <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border-2 border-white/20 hover:border-blue-400/60 font-semibold text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-neutral-400 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              AI Services
            </Link>
            <Link href="/products/pentx" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              PentX Product
            </Link>
            <Link href="/case-studies" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Case Studies
            </Link>
            <Link href="/about" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

