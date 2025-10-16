# CyberGlobal AI - Private, Compliant AI Solutions

Enterprise-grade AI consulting website built with Next.js 15, featuring premium design, comprehensive SEO, and enterprise security.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

## 📋 Features

### **Pages (10)**
- Homepage with industry verticals (?v=finance, healthcare, etc.)
- About Us with founder profiles
- AI Services with FAQ
- Business Impact with FAQ
- Case Studies
- PentX Product (AI Penetration Testing)
- Partners
- Contact (with hCaptcha & Cal.com)
- Privacy Policy
- Terms of Service

### **Security**
- hCaptcha bot protection
- Rate limiting (5 requests/hour, Upstash-ready)
- HTML escaping & 2KB payload limit
- Security headers (CSP, HSTS, X-Frame-Options)
- Honeypot trap

### **Privacy & Compliance**
- GDPR/CCPA compliant consent management
- Privacy-first analytics (consent-gated)
- Privacy Policy & Terms of Service

### **SEO**
- Complete JSON-LD schemas (Organization, Service, Product, FAQ)
- Dynamic Open Graph images
- Canonical URLs
- Dynamic sitemap with timestamps
- NOINDEX for preview deployments

### **Performance**
- next/font optimization (self-hosted)
- Next/Image for all images
- Link prefetching on navigation
- Fixed heights for CLS prevention
- Loading skeletons with shimmer

### **Design**
- Premium glassmorphism UI
- Blue-violet gradient system
- Animated backgrounds (4 unique styles)
- Framer Motion animations
- WCAG 2.1 AA accessible
- Responsive mobile-first design

## 🔧 Environment Variables

See `.env.example` for all required variables.

**Required:**
- `NEXT_PUBLIC_SITE_URL` - Production URL
- `RESEND_API_KEY` - Email service
- `HCAPTCHA_SECRET` - Bot protection
- `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` - Bot protection (public)

**Optional:**
- `NEXT_PUBLIC_CAL_URL` - Cal.com booking
- `UPSTASH_REDIS_REST_URL` - Rate limiting
- `NEXT_PUBLIC_SENTRY_DSN` - Error monitoring

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Typography:** next/font (Inter, Sora, Space Grotesk)
- **Forms:** hCaptcha, Zod validation
- **Email:** Resend
- **Analytics:** Vercel Analytics (consent-gated)
- **Monitoring:** Sentry
- **Deployment:** Vercel

## 🏗️ Project Structure

```
cyberglobal-ai/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── content/            # Content data (services, case studies)
│   ├── lib/                # Utilities (SEO, events, motion)
│   └── styles/             # Global CSS
├── public/                 # Static assets (images, logos)
├── BRIEF.md               # Design system & guidelines
├── DEPLOYMENT.md          # Deployment instructions
└── README.md              # This file
```

## 🎨 Design System

See `BRIEF.md` for complete design guidelines including:
- Color system (WCAG AA compliant)
- Glassmorphism patterns
- Typography scale
- Motion design principles
- Component patterns

## 🚀 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick deploy to Vercel:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📊 Build Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint
```

## ✅ Pre-Deployment Checklist

- [ ] All API keys configured in Vercel
- [ ] Domain DNS configured (cybergl.ai)
- [ ] Resend domain verified
- [ ] Build successful locally
- [ ] All pages tested
- [ ] Contact form tested
- [ ] Mobile responsive verified

## 📞 Contact

**CyberGlobal AI LTD**
- Email: info@cybergl.ai
- Phone: +40 752 607 204
- Office: Constantin Brancusi 78, Cluj-Napoca, Romania
- CUI: 48213020
- Reg. No: J12/2268/2023

---

**Built with ❤️ for enterprise AI delivery**

**License:** Private - All rights reserved
