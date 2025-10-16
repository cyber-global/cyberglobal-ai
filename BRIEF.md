# CyberGlobal AI - Design Brief

## 🎨 Visual Direction

**Aesthetic:** Cutting-edge AI product, modern, innovative, premium  
**Tone:** Technical credibility meets approachable professionalism  
**Inspiration:** Contemporary SaaS (RebelDot style), glassmorphism, depth through light

---

## 🌈 Color System

### Base Colors
```
Primary Background: #0B0B0F (deep blue-black)
Secondary Background: #111827 (neutral-900)
```

### Accent Colors
```
Electric Blue: #3B82F6 (primary actions, tech elements)
Violet: #A855F7 (secondary accent, gradients)
Green: #10B981 (trust badges, success states)
Red/Orange: #EF4444 → #F97316 (problem highlighting)
```

### Text Hierarchy
```
Primary: #f5f5f5 (near white) - Headings
Secondary: text-neutral-300 - Body copy
Tertiary: text-neutral-400 - Labels, metadata
Muted: text-neutral-500 - De-emphasized content
```

### Gradient Combinations
```css
/* Primary gradient - used for CTAs, highlights */
from-blue-500 to-blue-600
from-blue-500 to-violet-500

/* Text gradient - hero highlights */
135deg, #3B82F6 0%, #A855F7 100%

/* Problem accent */
from-red-500 to-orange-500

/* Success accent */
from-green-400 to-emerald-500
```

---

## 🎭 Glassmorphism System

### Base Glass Panel
```css
background: rgba(255, 255, 255, 0.02)  /* 2% white transparency */
border: 1px solid rgba(255, 255, 255, 0.1)  /* 10% white border */
backdrop-filter: blur(12px)  /* Frosted glass effect */
```

### Glass Panel with Glow (Interactive)
```css
/* Animated gradient border on hover */
.glass-panel-glow::before {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2));
  opacity: 0 → 1 on hover
}
```

### Gradient Halos
```css
/* Blur halos behind cards */
.absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-2xl
opacity: 0 → 100% on hover
```

---

## 📐 Spatial Design

### Max Widths
```
Container: max-w-7xl (1280px)
Narrow content: max-w-3xl (768px)
Text blocks: max-w-2xl (672px)
```

### Spacing Scale
```
Section padding: py-16 to py-20 (64-80px)
Card padding: p-6 to p-10 (24-40px)
Grid gaps: gap-6 to gap-12 (24-48px)
Element spacing: gap-2 to gap-4 (8-16px)
```

### Border Radius
```
Cards: rounded-xl (12px) or rounded-2xl (16px)
Buttons: rounded-lg (8px)
Pills/badges: rounded-full
Icons: rounded-lg to rounded-2xl
```

---

## 🎬 Motion Design

### Animation Principles
1. **Subtle but noticeable** - 0.6s duration
2. **Springy easing** - cubic-bezier(0.34, 1.56, 0.64, 1) or easeOut
3. **Stagger children** - 0.1s delay between items
4. **Scroll-triggered** - Animate when entering viewport
5. **Micro-interactions** - Scale, translate on hover

### Standard Animations

**Fade In Up (sections):**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6 }}
```

**Stagger Children (grids):**
```tsx
variants={stagger}  // Parent
variants={fadeIn}   // Children (0.1s delay each)
```

**Hover Animations:**
```css
hover:scale-[1.03]      /* Card growth */
hover:shadow-xl         /* Shadow expansion */
hover:shadow-blue-500/30  /* Colored glow */
group-hover:translate-x-1  /* Arrow slide */
group-hover:opacity-100    /* Icon reveal */
```

**Button Press:**
```css
active:scale-0.98  /* Springy push effect */
```

---

## 🧩 Component Patterns

### Section Header Pattern
```tsx
<div className="text-center mb-16">
  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
    Category Label
  </div>
  
  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold">Section Title</h2>
  
  {/* Optional subtitle */}
  <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
    Supporting description
  </p>
</div>
```

### Feature Card Pattern
```tsx
<div className="relative group">
  {/* Hover glow */}
  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
  
  {/* Card */}
  <div className="relative glass-panel-glow rounded-xl p-8">
    {/* Icon + Title */}
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
        <Icon />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Title</h3>
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
      </div>
    </div>
    
    {/* Content */}
    <p className="text-neutral-300">Description</p>
  </div>
</div>
```

### CTA Button Pattern
```tsx
{/* Primary */}
<Link className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all">
  <span>Action Text</span>
  <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
</Link>

{/* Secondary */}
<Link className="rounded-lg px-6 py-3.5 border border-white/20 hover:border-blue-400/50 font-medium hover:bg-white/5 transition-all">
  Secondary Action
</Link>
```

### Numbered Steps Pattern
```tsx
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-xl shadow-lg shadow-blue-500/20">
  {stepNumber}
</div>
```

---

## 📊 Visual Hierarchy Rules

### 1. Use Gradient Accents Sparingly
✅ **Use for:**
- Hero headline highlights (1-2 words)
- Primary CTA buttons
- Step numbers/badges
- Icon backgrounds
- Hover glows

❌ **Don't use for:**
- Body text
- Multiple headings per section
- Navigation links
- Small UI elements

### 2. Section Differentiation
Each major section should have:
- Unique section badge (different colored dot)
- Clear heading hierarchy
- Distinct visual treatment
- Appropriate spacing

### 3. Card Hierarchy
```
Most prominent: Glass panel + gradient glow + hover scale
Medium: Glass panel + hover glow
Subtle: Glass panel + hover background change
```

### 4. Icon Usage
- **12x12px** - Small icons, decorative elements
- **24x24px** - Standard icons in cards
- **40-48px** - Featured icons, hero elements
- **64px** - Large decorative icons

---

## 🎨 Background Treatments

### Ambient Gradients (body::before)
```css
radial-gradient(circle 800px at 120% 0%, rgba(59, 130, 246, 0.15), transparent)
radial-gradient(circle 600px at 0% 100%, rgba(168, 85, 247, 0.12), transparent)
radial-gradient(circle 500px at 80% 80%, rgba(59, 130, 246, 0.08), transparent)
```

**Purpose:** Atmospheric depth without distraction

### Section Overlays
```css
/* Subtle wash over section */
.absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent
```

**When to use:** Alternate sections for visual rhythm

---

## 🔤 Typography

### Font Stack
```css
Headings: 'Sora', 'Space Grotesk', sans-serif
Body: 'Inter', -apple-system, sans-serif
```

### Heading Scale
```
H1 (Hero): text-5xl md:text-6xl lg:text-7xl (48-72px)
H2 (Section): text-3xl md:text-4xl (30-36px)
H3 (Card): text-xl (20px)
H4 (Label): text-lg (18px)
```

### Font Weights
```
Bold: 700 (main headings)
Semibold: 600 (sub-headings, emphasis)
Medium: 500 (buttons, labels)
Regular: 400 (body text)
Light: 300 (optional, de-emphasized)
```

### Letter Spacing
```
Headings: tracking-tight (-0.02em)
Uppercase labels: tracking-wider (0.05em)
Body: Default (0)
```

---

## 🎯 Interactive States

### Links
```css
Default: text-neutral-300
Hover: text-white or text-blue-400
Focus: ring-2 ring-blue-400
Transition: 200ms ease
```

### Buttons
```css
Default: gradient background
Hover: shadow-xl + shadow glow + scale-105
Active: scale-98 (springy press)
Focus: ring-2 ring-blue-400 ring-offset-2
```

### Cards
```css
Default: glass-panel
Hover: gradient glow border + scale-103 + content reveals
Focus: ring-2 ring-blue-400
```

---

## 🎪 Special Components

### Badge/Pill
```tsx
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm">
  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
  Label Text
</div>
```

**Dot colors by context:**
- Blue: Technical, default
- Violet: Process, methodology
- Green: Trust, security
- Red/Orange: Problems, warnings

### Gradient Underlines
```tsx
<div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
```

**Usage:** Under section headings for visual accent

### Avatar with Initials
```tsx
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">
  {initials}
</div>
```

---

## 📱 Responsive Patterns

### Grid Breakpoints
```tsx
grid md:grid-cols-2 lg:grid-cols-3  /* 1 → 2 → 3 */
grid lg:grid-cols-5                 /* 1 → 5 (asymmetric) */
grid md:grid-cols-3                 /* 1 → 3 (timeline) */
```

### Typography Scaling
```tsx
text-4xl md:text-5xl lg:text-6xl  /* Heading growth */
text-base md:text-lg               /* Body scaling */
px-4 md:px-6 lg:px-8              /* Padding growth */
```

### Component Stacking
```tsx
flex flex-col sm:flex-row  /* Stack → row */
gap-4 md:gap-6 lg:gap-8   /* Gap expansion */
```

---

## 🎨 Section-Specific Treatments

### Hero Section
- Gradient badge with pulse animation
- Large gradient text highlight
- Premium stats card with glow backdrop
- Trust badges with icons
- Animated CTAs with hover scale

### Problem/Solution
- Contrasting colors (red/orange vs. blue/violet)
- Icon differentiation (warning vs. shield)
- Gradient underlines for visual separation
- Hover glow halos (color-coded)

### Process/Timeline
- Numbered gradient badges (1, 2, 3)
- Connecting gradient line on desktop
- Progress arrows between steps
- Consistent card heights

### Services Grid
- Icon squares with gradient backgrounds
- "Learn more" reveal on hover
- Scale-up on hover (1.03x)
- Gradient accent under titles

### Social Proof
- Asymmetric layout (2/3 split)
- Green gradient checkmarks
- Large quote icon (testimonial)
- Avatar with gradient background
- Sticky left column on scroll

### Final CTA
- [To be updated with premium treatment]

---

## ✨ Signature Visual Elements

### 1. Gradient Glow Halos
```tsx
<div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
```

**When to use:** Premium cards, testimonials, important sections

### 2. Gradient Text
```tsx
<span className="gradient-text">Highlighted phrase</span>
```

**When to use:** 1-2 words in hero, important callouts

### 3. Section Badges
```tsx
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-300">
  <span className="w-1.5 h-1.5 rounded-full bg-{color}-400"></span>
  Section Label
</div>
```

**Colors by section type:**
- Blue: Default, technical
- Violet: Process, methodology
- Green: Trust, compliance
- Red: Problems, warnings

### 4. Animated Icons on Hover
```tsx
<svg className="group-hover:translate-x-1 transition-transform">
  {/* Arrow or icon */}
</svg>
```

**Common animations:**
- `translate-x-1` - Arrows moving right
- `scale-110` - Icons growing
- `opacity-100` - Content revealing

### 5. Progress Indicators
```tsx
{/* Arrow between steps */}
<div className="w-8 h-8 rounded-full bg-[#0B0B0F] flex items-center justify-center border border-blue-500/30">
  <svg>→</svg>
</div>
```

---

## 🎯 Design Principles

### 1. Depth Through Layering
- Background ambient gradients (fixed)
- Section gradient washes (absolute)
- Card glass panels (relative)
- Hover glow halos (pseudo-elements)
- Content (foreground)

### 2. Visual Rhythm
- Alternate sections with/without borders
- Vary background treatments (wash, clean, gradient)
- Mix card sizes and layouts
- Use asymmetry strategically

### 3. Guided Attention
- Gradient accents draw eye to key elements
- Icons provide visual anchors
- Animations reveal content progressively
- Hover states reward exploration

### 4. Premium Feel
- Generous spacing (never cramped)
- Glassy transparency (sophisticated)
- Gradient glows (high-end)
- Smooth animations (polished)
- Attention to micro-details

### 5. Functional Beauty
- Accessibility never compromised
- Performance optimized (CSS > JS)
- Semantic HTML maintained
- Focus states always visible

---

## 🎨 Component Design Checklist

When creating a new section:

- [ ] Section badge with appropriate color dot
- [ ] Clear heading hierarchy (3xl-4xl for H2)
- [ ] Optional subtitle for context
- [ ] Glass panel treatment on cards
- [ ] Gradient accent (underline, icon, or glow)
- [ ] Hover state with animation
- [ ] Icons where appropriate (24-48px)
- [ ] Consistent spacing (py-16 to py-20)
- [ ] Responsive grid (1 → 2 → 3 columns)
- [ ] Motion animation on scroll
- [ ] Focus states for accessibility

---

## 🚫 What to Avoid

### Visual
❌ Overuse of gradients (keep them special)  
❌ Too many bright colors (maintain dark elegance)  
❌ Heavy borders (use subtle rgba(255,255,255,0.1))  
❌ Cluttered layouts (generous whitespace)  
❌ Inconsistent border radius  
❌ Mixing animation styles  

### Motion
❌ Animations > 1s duration (feels slow)  
❌ Animating on every hover (reserve for important)  
❌ Parallax effects (overdone)  
❌ Auto-playing animations (accessibility)  
❌ Layout shifts (CLS issues)  

### Color
❌ Pure white backgrounds (use glass panels)  
❌ Pure black text (use neutral-300)  
❌ Neon/saturated colors (keep subtle)  
❌ More than 3 gradient colors in one section  

---

## 📋 Section Types & Treatments

### Hero
- Largest text (7xl)
- Animated badge with pulse
- Gradient text highlight
- Premium feature card (right side)
- Multiple CTAs
- Trust indicators

### Content Block (Problem/Solution)
- Icon differentiation
- Colored gradient accents
- Side-by-side comparison
- Equal heights
- Hover glows

### Process/Timeline
- Numbered sequence
- Connecting elements (lines, arrows)
- Consistent card sizing
- Progressive disclosure
- Visual flow (left to right)

### Feature Grid
- 2-3 columns
- Icon + Title + Description
- Hover reveals ("Learn more")
- Scale on hover
- Stagger animation

### Social Proof
- Asymmetric layout (stand out)
- Large testimonial treatment
- Visual avatars
- Trust badges with icons
- Sticky scroll behavior

### CTA
- Full-width or centered
- Large heading
- Supporting copy
- Dual CTAs (primary + secondary)
- Dramatic background treatment

---

## 🎨 Color Psychology

**Blue:** Trust, technology, professionalism  
**Violet:** Innovation, creativity, premium  
**Green:** Security, success, compliance  
**Red/Orange:** Urgency, problems, warnings  

**Use color to guide emotion and action!**

---

## 🔮 Future Enhancements

### Potential Additions
- Animated mesh gradients (background)
- Particle effects (subtle)
- 3D card tilt on hover
- Smooth scroll snap sections
- Intersection-based parallax
- Dynamic gradient shifts

### Keep in Mind
- Performance first (CSS > JS)
- Accessibility always
- Mobile experience paramount
- Loading states matter
- Error states should be beautiful too

---

## 📦 Implementation Stack

**Styling:** Tailwind CSS v4 (CSS-first)  
**Animations:** Framer Motion (scroll + interactions)  
**Typography:** @fontsource (Sora, Inter)  
**Icons:** Heroicons (via inline SVG)  
**Effects:** Pure CSS (gradients, blur, shadows)  

---

## ✅ Quality Standards

Every component should be:
- ✅ Responsive (mobile-first)
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Performant (< 100ms interactions)
- ✅ Animated (subtle, purposeful)
- ✅ Branded (blue-violet gradients)
- ✅ Premium (glassy, layered depth)

---

**Design Philosophy:**  
"Cutting-edge AI technology deserves cutting-edge design. Every pixel should communicate innovation, trust, and technical sophistication."

**Last Updated:** October 16, 2025  
**Status:** Living document - evolve as design matures

