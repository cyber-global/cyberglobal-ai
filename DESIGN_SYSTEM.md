# CyberGlobal AI - Modern Design System

## 🎨 Overview

A contemporary, innovative design system built for the AI consulting industry. Modern glassmorphism meets subtle gradient glows with enterprise-grade accessibility.

---

## 🌈 Color Palette

### Base Colors
```css
--color-base: #0B0B0F        /* Deep black-blue background */
--color-base-900: #111827     /* Neutral 900 */
--color-electric-blue: #3B82F6  /* Primary accent */
--color-violet: #A855F7       /* Secondary accent */
```

### Text Colors
- **Primary**: `#f5f5f5` (near white)
- **Secondary**: `text-neutral-300` (readable gray)
- **Muted**: `text-neutral-400` (labels, metadata)
- **Accents**: `text-blue-400`, `text-violet-400`

### Usage
```tsx
// Headings
<h1 className="text-white">Main heading</h1>

// Body text
<p className="text-neutral-300">Body content</p>

// Gradient text (hero highlights)
<span className="gradient-text">Highlighted phrase</span>

// Muted text (labels)
<span className="text-neutral-400">Label</span>
```

---

## 📝 Typography

### Font Families

**Display (Headings):**
- Primary: **Sora** (modern, geometric)
- Fallback: **Space Grotesk**
- Usage: H1-H6, hero text, section headings

**Body:**
- Primary: **Inter** (highly readable)
- Fallback: System fonts
- Usage: Paragraphs, UI text, forms

### Implementation
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Sora', 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;  /* Tight tracking */
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 400;
}
```

### Scale
- **H1**: `text-4xl md:text-6xl` (36-60px)
- **H2**: `text-2xl md:text-3xl` (24-30px)
- **H3**: `text-xl` (20px)
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)
- **Tiny**: `text-xs` (12px)

### Font Weights
- Regular: 400 (body text)
- Medium: 500 (emphasized text)
- Semibold: 600 (headings, buttons)
- Bold: 700 (display headings, optional)

---

## 🪟 Glassy Panel System

### Standard Glass Panel
```tsx
<div className="glass-panel rounded-xl p-6">
  {/* Content */}
</div>
```

**Properties:**
- Background: `rgba(255, 255, 255, 0.02)` (2% white)
- Border: `rgba(255, 255, 255, 0.1)` (10% white)
- Backdrop blur: 12px
- Creates frosted glass effect

### Glass Panel with Glow (Interactive)
```tsx
<div className="glass-panel-glow rounded-xl p-6">
  {/* Content */}
</div>
```

**Hover Effect:**
- Animated gradient border appears on hover
- Blue-to-violet gradient outline
- Smooth opacity transition (0.3s)
- Creates premium feel

### Manual Implementation
```tsx
<div className="rounded-xl border border-white/10 p-6 bg-white/[0.02] backdrop-blur">
  {/* Content */}
</div>
```

---

## 🌟 Gradient Effects

### Text Gradient
```tsx
<span className="gradient-text">
  Highlighted text
</span>
```

**Result:** Blue-to-violet gradient text fill  
**Usage:** Hero highlights, key phrases, CTAs

### Background Gradients

**Ambient Glow** (body::before):
```css
radial-gradient(circle 800px at 120% 0%, rgba(59, 130, 246, 0.15), transparent)
radial-gradient(circle 600px at 0% 100%, rgba(168, 85, 247, 0.12), transparent)
radial-gradient(circle 500px at 80% 80%, rgba(59, 130, 246, 0.08), transparent)
```

**Creates:**
- Blue glow (top-right)
- Violet glow (bottom-left)  
- Additional blue accent (bottom-right)
- Subtle, non-distracting atmosphere

### Button Gradients
```tsx
<button className="bg-gradient-to-br from-blue-500 to-blue-600">
  Primary Action
</button>
```

**With Shadow:**
```tsx
<button className="bg-gradient-to-br from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/20">
  Enhanced Button
</button>
```

---

## 🎭 Motion & Animations

### Framer Motion Variants

**Fade In Up:**
```tsx
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

<motion.div {...fadeIn}>
  {/* Content */}
</motion.div>
```

**Stagger Children:**
```tsx
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

<motion.div variants={stagger}>
  <motion.div variants={fadeIn}>Child 1</motion.div>
  <motion.div variants={fadeIn}>Child 2</motion.div>
</motion.div>
```

**Scroll-Triggered:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  {/* Animates when scrolled into view */}
</motion.div>
```

### Micro-Interactions

**Button Press:**
```css
button:active {
  transform: scale(0.98);  /* Springy press effect */
}
```

**Hover Scale:**
```tsx
<Link className="hover:scale-[1.02] transition-transform">
  {/* Card that slightly grows on hover */}
</Link>
```

**Springy Transitions:**
```css
transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 🔘 Button Styles

### Primary Button
```tsx
<Link className="rounded-lg px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
  Primary Action
</Link>
```

**Features:**
- Gradient background (blue)
- White text
- Shadow glow on hover
- Rounded-lg corners
- Font-medium weight

### Secondary Button
```tsx
<Link className="rounded-lg px-6 py-3 border border-white/20 hover:border-white/40 font-medium hover:bg-white/5 transition-all">
  Secondary Action
</Link>
```

**Features:**
- Transparent with border
- Border brightens on hover
- Subtle background on hover
- Matches glassy aesthetic

### Contact Button (Header)
```tsx
<Link className="rounded-lg border border-white/20 hover:border-blue-400/50 px-4 py-2 text-sm font-medium hover:bg-white/5 transition-all">
  Contact
</Link>
```

---

## 📐 Layout System

### Max Width
```tsx
<div className="mx-auto max-w-7xl px-6">
  {/* 1280px max, responsive padding */}
</div>
```

**Container Widths:**
- Standard: `max-w-7xl` (1280px)
- Narrow: `max-w-4xl` (896px) for text-heavy content
- Wide: `max-w-[1400px]` for grids

### Spacing Scale
- **Section padding**: `py-16` to `py-24` (64-96px)
- **Card padding**: `p-6` to `p-8` (24-32px)
- **Grid gaps**: `gap-6` to `gap-12` (24-48px)
- **Element gaps**: `gap-3` to `gap-4` (12-16px)

### Grid Patterns
```tsx
{/* 2-column responsive */}
<div className="grid gap-8 md:grid-cols-2">

{/* 3-column responsive */}
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

{/* Hero split */}
<div className="grid gap-8 lg:grid-cols-2">
```

---

## 🎪 Component Patterns

### Service/Feature Card
```tsx
<div className="glass-panel-glow rounded-xl p-6 group hover:scale-[1.02] transition-transform">
  <h3 className="font-medium text-lg">Title</h3>
  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">Description</p>
</div>
```

### Testimonial Card
```tsx
<div className="glass-panel-glow rounded-xl p-8">
  <blockquote className="text-neutral-200 text-lg leading-relaxed italic">
    Quote text
  </blockquote>
  <div className="mt-4 text-sm text-neutral-400">— Attribution</div>
</div>
```

### Stats Display
```tsx
<li className="flex justify-between text-sm">
  <span className="text-neutral-300">Label</span>
  <span className="font-medium">Value</span>
</li>
```

### Section Divider
```tsx
<section className="py-16 border-t border-white/10">
  {/* Section content */}
</section>
```

---

## ♿ Accessibility Features

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]
```

**Result:** Visible blue ring around focused elements

### Skip Link
```tsx
<a href="#main-content" className="skip-to-main">
  Skip to main content
</a>
```

**Behavior:**
- Hidden above viewport
- Slides down on keyboard focus
- Gradient blue-violet background
- Springy animation

### ARIA Labels
```tsx
<nav aria-label="Main navigation">
  {/* Navigation */}
</nav>

<form aria-label="Contact form">
  {/* Form */}
</form>

<div role="status" aria-live="polite">
  {/* Success message */}
</div>
```

---

## 🎬 Animation Patterns

### Page Entry
```tsx
<motion.div {...fadeIn}>
  {/* Fades in and slides up on mount */}
</motion.div>
```

### Scroll Reveal
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
>
  {/* Animates when scrolled into view */}
</motion.div>
```

### Stagger Group
```tsx
<motion.div variants={stagger}>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeIn}>
      {/* Each child animates 0.1s after previous */}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects
```css
hover:scale-[1.02]  /* Slight grow */
hover:shadow-lg hover:shadow-blue-500/20  /* Glow effect */
hover:border-blue-400/50  /* Border color shift */
hover:bg-white/5  /* Background lighten */
```

---

## 🖼️ Visual Hierarchy

### Information Architecture
1. **Hero**: Large display heading with gradient highlight
2. **Sections**: Clear H2 headings, generous padding
3. **Cards**: Glassy panels with hover glows
4. **CTAs**: Gradient buttons with shadows

### Contrast Ratios (WCAG AA)
- White on #0B0B0F: 18.5:1 ✅
- Neutral-300 on #0B0B0F: 12.8:1 ✅
- Blue-400 on #0B0B0F: 8.2:1 ✅

### Visual Weight
- **Lightest**: Neutral-400 (labels, meta)
- **Light**: Neutral-300 (body text)
- **Medium**: Neutral-200 (emphasized text)
- **Heavy**: White (headings)
- **Accent**: Blue-400 gradient (CTAs, highlights)

---

## 🧩 Reusable Classes

### CSS Utility Classes
```css
.glass-panel           /* Standard frosted panel */
.glass-panel-glow      /* Panel with hover gradient border */
.gradient-text         /* Blue-to-violet text gradient */
.skip-to-main          /* Accessibility skip link */
.animate-fade-in-up    /* CSS-based fade animation */
```

### Tailwind Patterns
```tsx
/* Card pattern */
rounded-xl border border-white/10 p-6 bg-white/[0.02]

/* Button primary */
rounded-lg px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20

/* Button secondary */
rounded-lg px-6 py-3 border border-white/20 hover:border-white/40 font-medium hover:bg-white/5

/* Link hover */
text-neutral-300 hover:text-white transition-colors
```

---

## 🎯 Design Principles

### 1. Glassy & Transparent
- All cards use `bg-white/[0.02]` (2% opacity)
- Borders are `border-white/10` (10% opacity)
- Backdrop blur creates depth
- Layered glassmorphism aesthetic

### 2. Subtle Gradients
- Ambient gradient background (fixed)
- Gradient text for emphasis (not overused)
- Gradient buttons for primary CTAs
- Gradient glows on hover (cards)

### 3. Smooth Motion
- Framer Motion for scroll reveals
- Stagger animations for lists
- Springy easing (cubic-bezier)
- Micro-interactions on buttons

### 4. Generous Spacing
- Max width: 1280px (7xl)
- Section padding: 64-96px vertical
- Card gaps: 24-48px
- Element spacing: 12-16px
- Breathing room throughout

### 5. Modern & Crisp
- Sharp rounded corners (rounded-lg/xl)
- Clean typography (tight tracking)
- High contrast for readability
- Minimal ornamentation
- Focus on content

---

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Desktops */
xl:  1280px  /* Large desktops */
```

### Responsive Patterns
```tsx
/* Typography */
<h1 className="text-4xl md:text-6xl">

/* Grids */
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

/* Flex to grid */
<div className="flex flex-col lg:grid lg:grid-cols-2">

/* Spacing */
<section className="py-16 md:py-24">
```

---

## 🎨 Component Examples

### Hero Section
```tsx
<section className="pt-24 pb-12">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div {...fadeIn}>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
        Main heading with <span className="gradient-text">highlight</span>
      </h1>
      <p className="mt-5 text-neutral-300">Subtitle</p>
      {/* CTAs */}
    </motion.div>
  </div>
</section>
```

### Service Card Grid
```tsx
<motion.div 
  className="grid gap-6 md:grid-cols-3"
  variants={stagger}
>
  {services.map(s => (
    <motion.div key={s.id} variants={fadeIn}>
      <div className="glass-panel-glow rounded-xl p-6 hover:scale-[1.02]">
        <h3 className="font-medium text-lg">{s.title}</h3>
        <p className="text-sm text-neutral-300 mt-2">{s.description}</p>
      </div>
    </motion.div>
  ))}
</motion.div>
```

### Two-Column Content
```tsx
<div className="grid gap-12 lg:grid-cols-2">
  <div className="glass-panel-glow rounded-xl p-8">
    <h2 className="text-2xl font-semibold">Left column</h2>
    <p className="mt-4 text-neutral-300">Content</p>
  </div>
  <div className="glass-panel-glow rounded-xl p-8">
    <h2 className="text-2xl font-semibold">Right column</h2>
    <p className="mt-4 text-neutral-300">Content</p>
  </div>
</div>
```

---

## 🔗 Interactive States

### Link States
```tsx
<Link className="
  text-neutral-300          /* Default */
  hover:text-white          /* Hover */
  focus:outline-none 
  focus:ring-2 
  focus:ring-blue-400       /* Focus */
  transition-colors         /* Smooth */
">
```

### Button States
```tsx
<button className="
  bg-blue-500              /* Default */
  hover:shadow-lg 
  hover:shadow-blue-500/20 /* Hover glow */
  active:scale-98          /* Press */
  focus:ring-2 
  focus:ring-blue-400      /* Focus */
  transition-all           /* Smooth all props */
">
```

### Card States
```tsx
<div className="
  glass-panel-glow         /* Base */
  hover:scale-[1.02]       /* Hover */
  transition-transform     /* Smooth */
">
  {/* Hover shows gradient border via ::before */}
</div>
```

---

## 📊 Usage Guidelines

### When to Use Glass Panels
✅ **Use for:**
- Service/feature cards
- Content sections
- Testimonials
- Stats displays
- Form containers

❌ **Don't use for:**
- Header/footer (use solid backdrop-blur)
- Small UI elements
- Inline text
- Dense data tables

### When to Use Gradients
✅ **Use for:**
- Hero headline highlights (1-2 words)
- Primary CTA buttons
- Special emphasis
- Skip link

❌ **Don't use for:**
- Body text
- Multiple headings on same page
- Navigation
- Long paragraphs

### When to Animate
✅ **Animate:**
- Page entry (hero)
- Scroll reveals (sections)
- Card grids (stagger)
- Major CTAs

❌ **Don't animate:**
- Navigation
- Small text
- Repeated interactions
- Accessibility elements

---

## 🎨 Design Inspiration

**Aesthetic:** Modern, innovative, visitor-first  
**Influences:** Contemporary SaaS, glassmorphism trend, subtle depth  
**Feeling:** Premium, trustworthy, cutting-edge  
**Tone:** Professional yet approachable  

**Not:** Corporate/stuffy, overly animated, cluttered

---

## 🛠️ Quick Reference

### Standard Card
```tsx
<div className="glass-panel-glow rounded-xl p-6">
```

### Primary CTA
```tsx
<Link className="rounded-lg px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20">
```

### Section
```tsx
<section className="py-16 border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6">
```

### Heading
```tsx
<h2 className="text-2xl font-semibold">
```

### Body Text
```tsx
<p className="text-neutral-300">
```

---

## 📦 Installed Fonts

```json
"@fontsource/sora": "Sora 400, 600, 700"
"@fontsource/space-grotesk": "Space Grotesk 400, 600, 700"
"@fontsource/inter": "Inter 300, 400, 500"
```

**Total Font Size:** ~180KB (optimized)  
**Loading:** Self-hosted, no external requests

---

## ✨ Signature Features

1. **Gradient Text**: Blue-violet highlight on key phrases
2. **Glass Panel Glow**: Animated gradient border on hover
3. **Ambient Gradients**: Triple radial gradient background
4. **Springy Animations**: Cubic-bezier easing for bounce
5. **Button Shadows**: Blue glow on primary CTAs
6. **Micro-scale**: Subtle scale on interaction
7. **Backdrop Blur**: Premium frosted glass effect
8. **Stagger Reveals**: Sequential fade-ins

---

**Design System Version:** 1.0  
**Last Updated:** October 15, 2025  
**Status:** ✅ Production-Ready

