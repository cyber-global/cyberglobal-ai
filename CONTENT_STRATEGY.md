# Content Management Strategy

## 📝 Current Approach (v1.0)

### TypeScript Content Files

**Location:** `/src/content/*.ts`

**Files:**
- `home.ts` - Homepage content
- `services.ts` - Service offerings
- `about.ts` - Company information
- `businessImpact.ts` - Educational content
- `caseStudies.ts` - Client success stories
- `partners.ts` - Technology ecosystem

### ✅ Benefits of Current Approach

**For Developers:**
- ✅ Type-safe content (TypeScript validation)
- ✅ Version controlled with Git
- ✅ Easy to update in your code editor
- ✅ No external dependencies
- ✅ Fast builds (no API calls)
- ✅ Instant preview in dev mode

**For the Business:**
- ✅ No CMS costs ($0/month)
- ✅ Simple deployment (just commit + push)
- ✅ No database needed
- ✅ Content lives with code
- ✅ Easy to backup (Git history)

### 📝 Editing Content

**To update content:**

```bash
# 1. Open content file
src/content/home.ts

# 2. Edit the TypeScript object
export const home = {
  hero: {
    sub: "Your new subtitle here",
    stats: [
      { label: "New metric", value: "100%" }
    ]
  },
  // ... rest of content
}

# 3. Save file
# 4. Preview at localhost:3000
# 5. Commit when happy
git add src/content/home.ts
git commit -m "content: update homepage hero"
git push
```

### 🎯 Content Structure

**Consistent patterns across all files:**

```typescript
// Simple key-value
{ title: "...", description: "..." }

// Lists
items: [
  { label: "...", value: "..." },
  { label: "...", value: "..." }
]

// Hierarchical
sections: [
  {
    h: "Section heading",
    p: "Paragraph content",
    bullets: ["Point 1", "Point 2"]
  }
]
```

---

## 🔄 Future Migration Options

### Option A: Sanity CMS (Recommended for Marketing Teams)

**When to migrate:**
- Non-technical team needs to edit content
- Frequent content updates (daily/weekly)
- Multiple content editors
- Media library needed

**Sanity Benefits:**
- ✅ Intuitive editing interface
- ✅ Real-time collaboration
- ✅ Media management (images, videos)
- ✅ Content scheduling
- ✅ Revision history
- ✅ Free tier (3 users, 10GB assets)
- ✅ Fast API (CDN-backed)

**Migration Path:**

```bash
# 1. Install Sanity
npm install next-sanity @sanity/image-url

# 2. Set up Sanity Studio
npm create sanity@latest -- --template clean --create-project "CyberGlobal AI" --dataset production

# 3. Create schemas (services, caseStudies, etc.)
# 4. Import existing content
# 5. Update pages to fetch from Sanity API
# 6. Deploy Sanity Studio

# Time estimate: 2-3 days
```

**Cost:** Free tier sufficient for most needs

### Option B: Contentful (Enterprise-Grade)

**When to migrate:**
- Enterprise requirements (SSO, approvals)
- Multi-locale content
- Complex workflows
- Dedicated content team

**Contentful Benefits:**
- ✅ Enterprise features (SSO, roles, approvals)
- ✅ GraphQL API
- ✅ Strong CDN
- ✅ Advanced media features
- ✅ Webhooks for automation

**Cost:** $300+/month (paid only)

### Option C: Keep TypeScript Files

**When to keep:**
- ✅ Small team (all developers)
- ✅ Infrequent updates
- ✅ Prefer Git workflow
- ✅ Want type safety
- ✅ Minimize costs

**This is perfectly fine for MVP and beyond!**

---

## 📰 Future Blog/Resources Setup

### Plan: MDX via Contentlayer

**Already installed:** ✅ `contentlayer` + `next-contentlayer`

### Implementation Guide

#### 1. Create Content Directory

```bash
mkdir -p content/blog
```

#### 2. Configure Contentlayer

```typescript
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    category: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    image: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('blog/', ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('blog/', '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
});
```

#### 3. Update next.config.ts

```typescript
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  // ... existing config
};

export default withContentlayer(withSentryConfig(nextConfig, { ... }));
```

#### 4. Create Blog Pages

```typescript
// app/blog/page.tsx - Blog index
// app/blog/[slug]/page.tsx - Individual posts
```

#### 5. Write MDX Posts

```mdx
---
title: "How to Deploy Private LLMs in Your Infrastructure"
description: "Step-by-step guide to on-prem LLM deployment"
date: 2025-10-15
author: "CyberGlobal AI Team"
category: "Technical Guide"
tags: ["LLM", "On-Prem", "Security"]
---

# How to Deploy Private LLMs

Content here with **MDX components**...

<Callout type="info">
  Important security note
</Callout>
```

### Auto-Generate OG Images

**Install:**
```bash
npm install @vercel/og
```

**Create OG Image Route:**

```typescript
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from '@vercel/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function og({ params }: { params: { slug: string } }) {
  // Get post data
  const post = allPosts.find((p) => p.slug === params.slug);
  
  return new ImageResponse(
    (
      <div style={{
        background: 'linear-gradient(135deg, #0B0B0F 0%, #111827 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
      }}>
        <div style={{ 
          fontSize: 72, 
          fontWeight: 700,
          background: 'linear-gradient(135deg, #3B82F6, #A855F7)',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          {post.title}
        </div>
        <div style={{ fontSize: 32, color: '#d4d4d8', marginTop: 20 }}>
          CyberGlobal AI
        </div>
      </div>
    ),
    { ...size }
  );
}
```

**Result:** Automatic OG images at `/blog/[slug]/opengraph-image`

---

## 📂 Recommended Directory Structure (Future)

```
cyberglobal-ai/
├── src/
│   ├── app/
│   │   ├── blog/              # 🆕 Blog pages
│   │   │   ├── page.tsx       # Blog index
│   │   │   └── [slug]/
│   │   │       ├── page.tsx   # Post page
│   │   │       └── opengraph-image.tsx  # Auto OG image
│   │   └── ... existing pages
│   ├── content/               # Current TS files
│   └── components/
│       └── mdx/               # 🆕 MDX components
│           ├── Callout.tsx
│           ├── CodeBlock.tsx
│           └── Image.tsx
├── content/                   # 🆕 MDX blog posts
│   └── blog/
│       ├── 2025-10-01-private-llms.mdx
│       └── 2025-10-15-rag-guide.mdx
└── contentlayer.config.ts     # 🆕 Contentlayer config
```

---

## 🎨 Blog Design System

### Blog Post Layout

```tsx
<article className="prose prose-invert max-w-4xl mx-auto">
  {/* Hero */}
  <header className="mb-12">
    <div className="text-sm text-blue-400">{post.category}</div>
    <h1 className="text-4xl font-semibold mt-2">{post.title}</h1>
    <p className="text-neutral-400 mt-4">{post.date} • {post.author}</p>
  </header>
  
  {/* MDX Content */}
  <div className="glass-panel rounded-xl p-8">
    <MDXContent />
  </div>
</article>
```

### Blog Index

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {posts.map(post => (
    <Link href={post.url} className="glass-panel-glow rounded-xl p-6 group">
      <div className="text-sm text-blue-400">{post.category}</div>
      <h2 className="text-xl font-medium mt-2">{post.title}</h2>
      <p className="text-sm text-neutral-300 mt-2">{post.description}</p>
      <div className="text-xs text-neutral-400 mt-4">{post.date}</div>
    </Link>
  ))}
</div>
```

---

## 🔧 Content Editing Workflows

### Current Workflow (Developer-Friendly)

```
1. Edit TypeScript file
2. Preview on localhost
3. Commit to Git
4. Push to GitHub
5. Auto-deploy to Vercel
```

**Time per update:** 2-5 minutes  
**Who can edit:** Developers only

### Future Workflow with CMS (Marketing-Friendly)

```
1. Log into Sanity Studio
2. Edit content in visual editor
3. Click "Publish"
4. Webhook triggers Vercel rebuild
5. Live in 2-3 minutes
```

**Time per update:** 30 seconds  
**Who can edit:** Anyone (no code knowledge needed)

### Future Workflow with MDX Blog (Hybrid)

```
1. Write MDX file in /content/blog/
2. Preview on localhost
3. Commit to Git
4. Push to GitHub
5. Auto-deploy with OG image generated
```

**Time per update:** 5-10 minutes  
**Who can edit:** Technical writers, developers

---

## 📊 Content Management Comparison

| Feature | TypeScript | Sanity CMS | MDX Blog |
|---------|-----------|-----------|----------|
| **Setup Time** | ✅ Done | 2-3 days | 1-2 days |
| **Cost** | Free | Free tier OK | Free |
| **Non-tech editors** | ❌ No | ✅ Yes | ⚠️ Some |
| **Type safety** | ✅ Full | ⚠️ Runtime | ✅ Full |
| **Media management** | ❌ Manual | ✅ Built-in | ⚠️ Manual |
| **Version control** | ✅ Git | ⚠️ CMS only | ✅ Git |
| **Preview** | ✅ Instant | ✅ Draft mode | ✅ Instant |
| **Best for** | Developers | Marketers | Tech blog |

---

## 🎯 Recommended Roadmap

### Phase 1 (Current) ✅
- [x] TypeScript content files
- [x] Quick iterations
- [x] Developer-owned content
- [x] Zero CMS costs

### Phase 2 (When blog needed)
- [ ] Set up Contentlayer for MDX
- [ ] Create blog layout components
- [ ] Implement OG image generation
- [ ] Add RSS feed
- [ ] Create 5-10 initial posts

**Timeline:** 1-2 weeks  
**Trigger:** When ready to publish thought leadership

### Phase 3 (When non-tech editors needed)
- [ ] Migrate to Sanity CMS
- [ ] Create content schemas
- [ ] Import existing content
- [ ] Train content team
- [ ] Set up editorial workflow

**Timeline:** 2-3 weeks  
**Trigger:** Marketing team needs direct access

---

## 🚀 Quick Start: Adding Your First Blog Post (Future)

### 1. Enable Contentlayer

```typescript
// next.config.ts
import { withContentlayer } from 'next-contentlayer';

export default withContentlayer(
  withSentryConfig(nextConfig, sentryOptions)
);
```

### 2. Create contentlayer.config.ts

```typescript
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    category: { 
      type: 'enum', 
      options: ['Technical Guide', 'Case Study', 'Industry Insights', 'Product Updates'],
      required: true 
    },
    tags: { type: 'list', of: { type: 'string' } },
    image: { type: 'string' },
    featured: { type: 'boolean', default: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('blog/', ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('blog/', '')}`,
    },
    readingTime: {
      type: 'number',
      resolve: (post) => {
        const wordsPerMinute = 200;
        const wordCount = post.body.raw.split(/\s+/g).length;
        return Math.ceil(wordCount / wordsPerMinute);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
```

### 3. Create First Post

```mdx
---
title: "Deploying Private AI: A Complete Guide"
description: "Learn how to deploy on-prem LLMs with RAG for your enterprise"
date: 2025-10-15
author: "CyberGlobal AI Team"
category: "Technical Guide"
tags: ["LLM", "On-Prem", "RAG", "Security"]
featured: true
---

# Deploying Private AI: A Complete Guide

Modern enterprises need AI that respects data sovereignty. Here's how to deploy private LLMs on your infrastructure.

## Why Private LLMs Matter

Public LLMs like GPT-4 require sending your data to external servers. For regulated industries, this is often a non-starter.

<Callout type="info">
  **Key Insight**: 73% of enterprises cite data privacy as their top concern with AI adoption.
</Callout>

## Architecture Overview

{/* Add technical content */}
```

### 4. Create Blog Pages

```typescript
// app/blog/page.tsx
import { allPosts } from 'contentlayer/generated';

export default function BlogIndex() {
  const posts = allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-semibold">Blog & Resources</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Link key={post.slug} href={post.url} className="glass-panel-glow rounded-xl p-6">
            <div className="text-sm text-blue-400">{post.category}</div>
            <h2 className="text-xl font-medium mt-2">{post.title}</h2>
            <p className="text-sm text-neutral-300 mt-2">{post.description}</p>
            <div className="text-xs text-neutral-400 mt-4">
              {new Date(post.date).toLocaleDateString()} • {post.readingTime} min read
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

```typescript
// app/blog/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug);
  const MDXContent = useMDXComponent(post.body.code);
  
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <header className="mb-12">
        <div className="text-sm text-blue-400">{post.category}</div>
        <h1 className="text-4xl font-semibold mt-2">{post.title}</h1>
        <div className="text-neutral-400 mt-4">
          {new Date(post.date).toLocaleDateString()} • {post.author} • {post.readingTime} min read
        </div>
      </header>
      
      <div className="glass-panel rounded-xl p-8 prose prose-invert prose-blue max-w-none">
        <MDXContent />
      </div>
    </article>
  );
}
```

### 5. Auto-Generate OG Images

```typescript
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from '@vercel/og';
import { allPosts } from 'contentlayer/generated';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function og({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug);
  
  return new ImageResponse(
    (
      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #0B0B0F 0%, #111827 100%)',
        padding: '80px',
      }}>
        {/* Category badge */}
        <div style={{
          fontSize: 24,
          color: '#3B82F6',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          {post.category}
        </div>
        
        {/* Title */}
        <div style={{
          fontSize: 64,
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.2,
          maxWidth: '900px',
        }}>
          {post.title}
        </div>
        
        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}>
          <div style={{
            fontSize: 28,
            background: 'linear-gradient(135deg, #3B82F6, #A855F7)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600,
          }}>
            CyberGlobal AI
          </div>
          <div style={{ fontSize: 24, color: '#737373' }}>
            {new Date(post.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
```

**Result:** Automatic branded OG images for social sharing!

---

## 📝 Content Templates

### Blog Post Template

```mdx
---
title: "[Title That Attracts Your Audience]"
description: "[One-sentence hook that makes readers want to click]"
date: 2025-XX-XX
author: "CyberGlobal AI Team"
category: "Technical Guide" | "Case Study" | "Industry Insights" | "Product Updates"
tags: ["AI", "LLM", "Security", "Compliance"]
featured: true
---

# {title}

**TL;DR**: [2-3 sentence summary]

## The Challenge

[Describe the problem your audience faces]

## Our Approach

[Explain your solution]

## Implementation

[Technical details, code examples]

## Results

[Metrics, outcomes, lessons learned]

## Key Takeaways

- Point 1
- Point 2
- Point 3

---

**Ready to implement this?** [Book a consultation](/contact)
```

### Case Study Template

```mdx
---
title: "How [Company] Achieved [Result] with Private AI"
description: "[Specific outcome] in [timeframe] using [approach]"
date: 2025-XX-XX
author: "CyberGlobal AI Team"
category: "Case Study"
tags: ["Case Study", "Industry", "Use Case"]
---

## Client Background

[Industry, size, challenge]

## The Challenge

[Specific problem they faced]

## Solution Architecture

[Technical approach, tools used]

## Implementation

[Timeline, process, team]

## Results

- **Metric 1**: -XX%
- **Metric 2**: +XX%
- **Metric 3**: [Outcome]

## Client Testimonial

> "Quote from client"
>
> — Name, Title, Company
```

---

## 🎯 Content Strategy Recommendations

### Blog Topics to Cover

**Technical Guides:**
1. "Deploying Private LLMs: Complete Infrastructure Guide"
2. "RAG Architecture for Enterprise Document Search"
3. "Building Compliant AI: GDPR, HIPAA, SOC 2"
4. "Vector Database Selection for Production"
5. "On-Prem vs. Private Cloud: Cost Analysis"

**Industry Insights:**
1. "AI Adoption in Regulated Industries: 2025 State"
2. "The True Cost of Data Sovereignty"
3. "Why Open-Source LLMs Are Winning Enterprise"
4. "Privacy-First AI: Beyond Compliance"

**Case Studies:**
1. "How a Fortune 500 Deployed Private RAG in 6 Weeks"
2. "Reducing Document Processing Time by 60%"
3. "Building Audit-Ready AI for Financial Services"

**Product Updates:**
1. "Announcing: Air-Gapped LLM Deployments"
2. "New: Compliance Dashboard for HIPAA"
3. "Feature Release: Multi-Tenant RAG"

### Publishing Cadence

**Recommended:**
- **1 technical guide/month** - Deep technical content
- **1 industry insight/month** - Thought leadership
- **1 case study/quarter** - Proof of results
- **Product updates as needed** - Keep clients informed

---

## 🔄 Migration Timeline

### Now → Month 3
✅ Keep TypeScript content files  
✅ Fast iterations  
✅ Developer-owned  

### Month 3 → Month 6 (Add Blog)
- Set up Contentlayer + MDX
- Write 3-5 initial posts
- Implement OG image generation
- Add RSS feed
- Promote content

### Month 6+ (Migrate to CMS if needed)
- Evaluate editing team needs
- Choose CMS (Sanity recommended)
- Migrate existing content
- Train editors
- Establish workflow

---

## 📚 Resources

### Sanity CMS
- Docs: https://www.sanity.io/docs
- Studio: https://www.sanity.io/studio
- Pricing: https://www.sanity.io/pricing

### Contentlayer
- Docs: https://contentlayer.dev
- Examples: https://github.com/contentlayerdev/contentlayer/tree/main/examples

### OG Image Generation
- Vercel OG: https://vercel.com/docs/functions/edge-functions/og-image-generation
- Examples: https://vercel.com/docs/functions/edge-functions/og-image-examples

### MDX
- Docs: https://mdxjs.com
- Components: https://mdxjs.com/table-of-components/

---

## ✅ Current Status

**Content Management:** ✅ TypeScript files (production-ready)  
**Blog Setup:** ⏳ Ready to implement when needed  
**CMS Migration:** ⏳ Planned for future  
**Documentation:** ✅ Complete guides created  

---

**For now:** Your content is perfect in TypeScript files. When you're ready to add a blog or enable non-technical editors, follow the guides above!

**Estimated effort to add blog:** 1-2 days  
**Estimated effort to migrate to CMS:** 2-3 weeks  

---

**Last Updated:** October 15, 2025  
**Current Approach:** TypeScript content files ✅  
**Future Options:** MDX blog, Sanity CMS documented

