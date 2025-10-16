# Image Optimization Guide

## Using Next/Image for Core Web Vitals

When adding images to your site, always use Next.js `Image` component for automatic optimization:

```tsx
import Image from "next/image";

// Example: Logo in header
<Image 
  src="/logo.png"
  alt="CyberGlobal AI"
  width={200}
  height={50}
  priority // for above-the-fold images
/>

// Example: Team photo
<Image 
  src="/team/member.jpg"
  alt="Team member name"
  width={400}
  height={400}
  className="rounded-full"
  loading="lazy" // for below-the-fold images
/>

// Example: Case study image
<Image 
  src="/case-studies/project.jpg"
  alt="Project description"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

## Benefits

✅ **Automatic optimization**: WebP/AVIF format, responsive sizes  
✅ **Lazy loading**: Images load only when in viewport  
✅ **Blur placeholder**: Smooth loading experience  
✅ **Prevent layout shift**: Width/height prevent CLS  

## Where to Add Images

### Homepage (`app/page.tsx`)
- Hero illustration (right side, optional)
- Partner logos (LogoCloud component)

### Services Page (`app/services/page.tsx`)
- Service icons (can use Lucide icons instead)

### Case Studies (`app/case-studies/page.tsx`)
- Client logos (anonymized)
- Project screenshots (blurred for privacy)

### About Page (`app/about/page.tsx`)
- Team photos (if desired)
- Office locations

## Image Directory Structure

```
/public/
  ├── logo.png              # Main logo (Header/Footer)
  ├── og-image.jpg          # OpenGraph share image (1200×630)
  ├── favicon.ico           # Already exists
  ├── partners/             # Partner logos
  │   ├── aws.svg
  │   ├── azure.svg
  │   └── gcp.svg
  ├── case-studies/         # Project images
  │   ├── finance.jpg
  │   └── healthcare.jpg
  └── team/                 # Team photos
      └── placeholder.jpg
```

## Image Sizes

- **Logo**: 200×50px (SVG preferred)
- **OG Image**: 1200×630px (for social sharing)
- **Case Study**: 800×600px or 16:9 ratio
- **Team Photos**: 400×400px (square)
- **Partner Logos**: SVG (scalable)

## Current Implementation

### ✅ Already Optimized
- **Cal.com iframe**: Uses `loading="lazy"` attribute
- **All images via Next.js**: No `<img>` tags in use yet

### 📋 When Adding Images
1. Place in `/public` directory
2. Use `next/image` component
3. Specify width and height
4. Use `priority` for above-fold, `loading="lazy"` for below
5. Add descriptive alt text for accessibility

## Performance Notes

- Next.js automatically optimizes images on-demand
- Images are cached and served from Vercel CDN
- Responsive srcsets are generated automatically
- Modern formats (WebP/AVIF) served to supporting browsers

---

**Note**: Current site has no images yet, ready for you to add when needed with proper optimization built-in!

