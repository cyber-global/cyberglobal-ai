# CyberGlobal AI - Project Structure

## 📁 Complete File Map

### API Routes
```
/src/app/api/
  └── contact/
      └── route.ts          # Contact form submission endpoint with Resend integration
```

### Pages
```
/src/app/
  ├── page.tsx              # Homepage with hero, stats, services, testimonials
  ├── about/
  │   └── page.tsx          # About page with mission, values, story, timeline
  ├── services/
  │   └── page.tsx          # Services page with detailed offerings and FAQ
  ├── business-impact/
  │   └── page.tsx          # Business impact page with ROI metrics and case studies
  ├── case-studies/
  │   └── page.tsx          # Case studies showcase with featured story
  ├── partners/
  │   └── page.tsx          # Partners page with technology partnerships
  ├── contact/
  │   └── page.tsx          # Contact page with form and info
  ├── layout.tsx            # Root layout with Header, Footer, Analytics
  ├── sitemap.ts            # Dynamic sitemap generation
  └── robots.txt/
      └── route.ts          # Robots.txt generation
```

### Components
```
/src/components/
  ├── Callout.tsx           # CTA callout section with animated appearance
  ├── Container.tsx         # Responsive container wrapper (3 sizes)
  ├── Footer.tsx            # Site footer with navigation and social links
  ├── Header.tsx            # Site header with navigation and mobile menu
  ├── PageHero.tsx          # Animated page hero with badge, title, subtitle
  ├── Section.tsx           # Section wrapper with spacing options
  ├── ServiceCard.tsx       # Service card with icon, title, description
  ├── Stat.tsx              # Animated statistic display
  ├── Testimonial.tsx       # Testimonial card with avatar
  ├── FAQ.tsx               # Accordion-based FAQ component
  ├── Timeline.tsx          # Animated timeline component
  ├── LogoCloud.tsx         # Partner logo grid
  ├── MDXRemote.tsx         # MDX content renderer (placeholder)
  └── ui/                   # shadcn/ui components (15 components)
      ├── accordion.tsx
      ├── avatar.tsx
      ├── badge.tsx
      ├── button.tsx
      ├── card.tsx
      ├── dialog.tsx
      ├── dropdown-menu.tsx
      ├── input.tsx
      ├── label.tsx
      ├── navigation-menu.tsx
      ├── separator.tsx
      ├── sheet.tsx
      ├── sonner.tsx
      ├── textarea.tsx
      └── tooltip.tsx
```

### Content Files
```
/src/content/
  ├── home.ts               # Homepage content (hero, stats, services, testimonials)
  ├── about.ts              # About page content (mission, values, story, timeline)
  ├── services.ts           # Services content (6 services with features/benefits)
  ├── businessImpact.ts     # Business impact content (metrics, ROI, case studies)
  ├── caseStudies.ts        # Case studies content (6 success stories)
  └── partners.ts           # Partners content (tech partners, certifications)
```

### Library Files
```
/src/lib/
  ├── seo.ts                # SEO metadata generation utility
  ├── utils.ts              # Utility functions (cn helper)
  └── validations.ts        # Zod schemas for form validation
```

### Configuration Files
```
/
├── middleware.ts           # Security headers middleware
├── next.config.ts          # Next.js config with Sentry integration
├── tsconfig.json           # TypeScript configuration
├── components.json         # shadcn/ui configuration
├── postcss.config.mjs      # PostCSS configuration
├── eslint.config.mjs       # ESLint configuration
├── sentry.client.config.ts # Sentry client configuration
├── sentry.server.config.ts # Sentry server configuration
├── sentry.edge.config.ts   # Sentry edge configuration
└── .sentryclirc            # Sentry CLI configuration (gitignored)
```

### Styles
```
/src/app/
└── globals.css             # Tailwind CSS v4 with custom variables
```

### Environment & Documentation
```
/
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables (gitignored)
├── README.md               # Main documentation
├── DEPLOYMENT.md           # Deployment guide
├── VERCEL_ENV_VARS.txt     # Quick reference for Vercel
└── PROJECT_STRUCTURE.md    # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Dark neutral (oklch-based)
- **Secondary**: Light neutral
- **Muted**: Subtle background tones
- **Accent**: Interactive elements
- **Destructive**: Error states
- **Dark Mode**: Full dark theme support

### Typography
- **Headings**: Bold, tracking-tight
- **Body**: Geist Sans font family
- **Code**: Geist Mono font family

### Spacing
- Consistent padding: `py-16 sm:py-24` (default sections)
- Container max-widths: 7xl (default), 4xl (narrow), 1400px (wide)

## 📊 Content Architecture

### Homepage
- Hero section with dual CTA
- Stats showcase (4 metrics)
- Services overview (6 cards)
- Featured case study
- Testimonials (3 cards)
- Final CTA

### About Page
- Mission statement
- Core values (4 cards)
- Company story (3 paragraphs)
- Timeline (6 milestones)
- Stats overview
- Careers CTA

### Services Page
- Services overview (6 cards)
- Detailed service breakdown with features/benefits
- Process timeline (5 steps)
- FAQ section
- Consultation CTA

### Business Impact Page
- Impact stories by industry (6 categories)
- Methodology framework (4 steps)
- ROI breakdown by implementation type
- Assessment CTA

### Case Studies Page
- Featured case study (detailed)
- Case study grid (6 studies)
- Client testimonial
- Project start CTA

### Partners Page
- Partner categories (4 groups)
- Certifications grid
- Partnership benefits (6 cards)
- Partnership inquiry CTA

### Contact Page
- Contact form (4 fields with validation)
- Contact information (4 cards)
- Booking CTA

## 🔌 Integrations

### Email (Resend)
- Contact form submissions
- Environment variable: `RESEND_API_KEY`

### Booking (Cal.com)
- Consultation scheduling
- Environment variable: `NEXT_PUBLIC_CAL_URL`

### Monitoring (Sentry)
- Client, server, and edge error tracking
- Performance monitoring
- Session replay
- Environment variables: `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT`, `NEXT_PUBLIC_SENTRY_DSN`

### Analytics (Vercel)
- Integrated via `@vercel/analytics/react`
- Automatic tracking on deployment

## 🚀 Key Features

### Performance
- Framer Motion animations (optimized)
- Image optimization with Next.js Image
- Code splitting by route
- Tailwind CSS v4 (CSS-first)

### SEO
- Dynamic metadata generation
- Sitemap.xml
- Robots.txt
- OpenGraph tags
- Twitter cards

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### Security
- Security headers in middleware
- CSRF protection
- Input validation with Zod
- Environment variable protection

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 🧪 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## ✅ Completion Checklist

- [x] API routes created
- [x] All pages created (7 total)
- [x] All components created (12 custom + 15 UI)
- [x] All content files created (6 files)
- [x] SEO utilities created
- [x] Form validation setup
- [x] Middleware configured
- [x] Sentry integration
- [x] Environment variables documented
- [x] No linting errors (1 acceptable warning)
- [x] Fully responsive design
- [x] Dark mode support
- [x] Animations implemented

## 🎯 Next Steps

1. Add actual images to `/public` directory
2. Configure your Resend verified domain
3. Set up Sentry project and get DSN
4. Add Cal.com booking URL
5. Customize content in `/src/content` files
6. Test contact form functionality
7. Deploy to Vercel

---

**Status**: ✅ Production-ready
**Last Updated**: October 15, 2025

