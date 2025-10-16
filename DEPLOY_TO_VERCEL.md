# 🚀 Deploy CyberGlobal AI to Vercel

Complete step-by-step guide to deploy your production-ready website.

---

## 📋 Pre-Deployment Checklist

### ✅ Before You Start

- [ ] Update email addresses in `src/app/api/contact/route.ts`
- [ ] Customize content in `/src/content/*.ts` files
- [ ] Have Resend API key ready
- [ ] Have Cal.com booking URL ready
- [ ] Have Sentry project created
- [ ] Domains registered (cybergl.com, cyberglobal.ai)

---

## 1️⃣ Push to GitHub

### Initialize Git (if not already done)

```bash
cd /Users/maria-antoanetapusoiu/Desktop/CGAI/cyberglobal-ai

# Check current status
git status

# Stage all files
git add .

# Commit
git commit -m "feat: complete CyberGlobal AI website with modern design system"

# Add your GitHub remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/cyberglobal-ai.git

# Push to main branch
git push -u origin main
```

### ⚠️ Important Git Notes

The following files are already gitignored (won't be committed):
- `.env.local` - Your local environment variables
- `.sentryclirc` - Sentry CLI credentials
- `node_modules/` - Dependencies
- `.next/` - Build output

---

## 2️⃣ Import to Vercel

### Step-by-Step

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Sign in with GitHub

2. **Import Repository**
   - Click **"Import Project"**
   - Select **"Import Git Repository"**
   - Find `cyberglobal-ai` in your GitHub repos
   - Click **"Import"**

3. **Configure Project**
   ```
   Framework Preset: Next.js (auto-detected ✅)
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install --legacy-peer-deps
   ```

4. **⚠️ IMPORTANT: Add Environment Variables BEFORE First Deploy**

---

## 3️⃣ Set Environment Variables

### In Vercel Dashboard → Project Settings → Environment Variables

**Add ALL 6 variables for ALL environments** (Production, Preview, Development):

#### Variable 1: RESEND_API_KEY
```
Name: RESEND_API_KEY
Value: re_... (from https://resend.com/api-keys)
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

#### Variable 2: NEXT_PUBLIC_CAL_URL
```
Name: NEXT_PUBLIC_CAL_URL
Value: https://cal.com/your-handle/30min
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

#### Variable 3: SENTRY_AUTH_TOKEN
```
Name: SENTRY_AUTH_TOKEN
Value: sntrys_... (from https://sentry.io/settings/account/api/auth-tokens/)
Environments: ☑️ Production ☑️ Preview ☑️ Development
Scopes Required: project:read, project:releases, org:read
```

#### Variable 4: SENTRY_ORG
```
Name: SENTRY_ORG
Value: your-org-slug (from Sentry dashboard)
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

#### Variable 5: SENTRY_PROJECT
```
Name: SENTRY_PROJECT
Value: cyberglobal-ai
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

#### Variable 6: NEXT_PUBLIC_SENTRY_DSN
```
Name: NEXT_PUBLIC_SENTRY_DSN
Value: https://abc123@xyz.ingest.us.sentry.io/456
Environments: ☑️ Production ☑️ Preview ☑️ Development
Get from: Sentry Project → Settings → Client Keys (DSN)
```

### ⚠️ Important Notes

- **NEXT_PUBLIC_*** variables are exposed to the browser (safe for public data only)
- **SENTRY_AUTH_TOKEN** is secret and only used during build
- All variables must be set BEFORE first deployment

---

## 4️⃣ Initial Deployment

### After Adding Environment Variables

1. Click **"Deploy"** button
2. Wait for build to complete (~3-5 minutes)
3. Vercel will assign a URL: `https://cyberglobal-ai-xxx.vercel.app`
4. Click the URL to view your site!

### Verify Deployment

- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Gradient background visible
- [ ] Animations working
- [ ] Contact form submits (check Resend dashboard)
- [ ] Check Sentry for build events

---

## 5️⃣ Configure Custom Domains

### Add Primary Domain

1. **In Vercel Dashboard → Project → Settings → Domains**

2. **Add cybergl.com**
   ```
   Domain: cybergl.com
   Redirect: (leave unchecked - this is primary)
   ```

3. **Add www subdomain**
   ```
   Domain: www.cybergl.com
   Redirect: → cybergl.com (main domain)
   ```

4. **Configure DNS Records**
   
   At your domain registrar (e.g., Namecheap, GoDaddy):
   
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

### Add Alias Domain

5. **Add cyberglobal.ai**
   ```
   Domain: cyberglobal.ai
   Redirect: → cybergl.com (primary)
   ```

6. **Configure DNS** (same as above but for cyberglobal.ai)

### SSL Certificates

- Vercel automatically provisions Let's Encrypt SSL certificates
- Wait 24-48 hours for DNS propagation
- HTTPS will be enforced automatically

---

## 6️⃣ Production Branch Configuration

### In Vercel Dashboard → Project → Settings → Git

**Production Branch:**
```
Branch: main
```

**Preview Branches:**
```
☑️ Enable automatic preview deployments for all branches
```

**How It Works:**
- **main branch** → Production deployment (cybergl.com)
- **PR branches** → Preview deployments (unique URL per PR)
- **Preview URLs** → Format: `cyberglobal-ai-git-branch-name.vercel.app`

### Branch Protection (Recommended)

In GitHub → Repository → Settings → Branches:
```
Branch name pattern: main
☑️ Require pull request reviews before merging
☑️ Require status checks to pass (Vercel build)
☑️ Require branches to be up to date
```

---

## 7️⃣ Enable Vercel Analytics

### Already Configured in Code! ✅

Analytics is already integrated in `src/components/Providers.tsx`:

```tsx
<Analytics beforeSend={(event) => {
  // Filters sensitive paths
  const url = event.url || "";
  if (url.includes("/api/") || url.includes("token") || url.includes("key")) {
    return null;
  }
  return event;
}} />
```

### View Analytics

1. Go to Vercel Dashboard → Project → Analytics tab
2. Analytics will start tracking automatically after first deployment
3. View:
   - Page views
   - Top pages
   - Referrers
   - Devices
   - Countries

### Configure Analytics Settings

**In Vercel Dashboard → Project → Settings → Analytics:**

```
☑️ Enable Web Analytics
☑️ Enable Speed Insights
Data Retention: 30 days (free tier) or longer (pro)
```

---

## 8️⃣ Enable Speed Insights

### Already Configured in Code! ✅

Speed Insights is already integrated in `src/components/Providers.tsx`:

```tsx
<SpeedInsights />
```

### View Speed Insights

1. Go to Vercel Dashboard → Project → Speed Insights tab
2. After deployment, view:
   - Core Web Vitals (LCP, FID, CLS)
   - Real User Monitoring scores
   - Performance over time
   - Page-by-page breakdown

### Expected Scores

Based on current implementation:
- **LCP**: < 1.0s (Good)
- **FID**: < 50ms (Good)
- **CLS**: 0 (Good)
- **Overall Score**: 95-100

---

## 9️⃣ Configure Sentry Integration

### Option A: Vercel Integration (Recommended)

1. **Go to Vercel Dashboard → Project → Settings → Integrations**

2. **Search for "Sentry"**

3. **Click "Add Integration"**

4. **Authorize Vercel + Sentry**
   - Connect your Sentry account
   - Select organization
   - Select project: `cyberglobal-ai`

5. **Benefits of Integration:**
   - ✅ Automatic release tracking
   - ✅ Deployment context in errors
   - ✅ Source maps uploaded automatically
   - ✅ Commit SHA tracking
   - ✅ Environment detection

### Option B: Manual Configuration (Already Done) ✅

Your Sentry configuration is already complete:
- ✅ `sentry.client.config.ts` - Client errors
- ✅ `sentry.server.config.ts` - Server errors
- ✅ `sentry.edge.config.ts` - Edge errors
- ✅ `next.config.ts` - Source map uploads
- ✅ Environment variables configured

**The manual setup works with the integration!**

### Verify Sentry is Working

After deployment:

1. Visit your deployed site
2. Open browser console
3. Run: `throw new Error("Test Sentry error");`
4. Check Sentry Dashboard → Issues
5. Should see the error with:
   - Release/commit info
   - Environment (production)
   - Source maps
   - Session replay

---

## 🔟 Deployment Workflow

### Daily Development Flow

```bash
# 1. Create feature branch
git checkout -b feature/new-page

# 2. Make changes
# ... edit files ...

# 3. Commit
git add .
git commit -m "feat: add new page"

# 4. Push branch
git push origin feature/new-page

# 5. Create Pull Request on GitHub
# → Vercel automatically creates preview deployment
# → Preview URL appears in PR comments
# → Review changes on preview URL

# 6. Merge PR to main
# → Triggers production deployment to cybergl.com
```

### Preview Deployments

**Every PR gets:**
- ✅ Unique preview URL
- ✅ Full production build
- ✅ All environment variables
- ✅ Automatic comments in PR with URL
- ✅ Updated on every push

**Benefits:**
- Test changes before merging
- Share with team/clients
- QA on real infrastructure
- No impact on production

---

## 1️⃣1️⃣ Post-Deployment Tasks

### Immediate Tasks

- [ ] **Update Resend email domain**
  ```typescript
  // src/app/api/contact/route.ts
  from: "CyberGlobal AI <hello@mail.cybergl.com>"
  ```
  Verify domain at https://resend.com/domains

- [ ] **Test contact form end-to-end**
  - Submit form on production
  - Verify email received

- [ ] **Verify Cal.com embed**
  - Check booking widget loads
  - Test booking flow

- [ ] **Check Sentry**
  - Verify errors are captured
  - Check release tracking
  - Verify source maps uploaded

- [ ] **Test all pages**
  - Click through entire site
  - Check mobile responsiveness
  - Verify animations work

### SEO Tasks

- [ ] **Submit sitemap to Google Search Console**
  - Add property: cybergl.com
  - Submit sitemap: https://www.cybergl.com/sitemap.xml

- [ ] **Verify structured data**
  - Use Google Rich Results Test
  - URL: https://search.google.com/test/rich-results
  - Test homepage and services page

- [ ] **Check OpenGraph tags**
  - Share URL on LinkedIn/Twitter
  - Verify image and title display correctly

---

## 🔧 Troubleshooting

### Build Fails with Environment Variable Error

**Solution:** Ensure all 6 environment variables are set in Vercel

### Fonts Not Loading

**Solution:** Already using @fontsource (self-hosted), should work automatically

### Sentry Not Capturing Events

**Check:**
1. `NEXT_PUBLIC_SENTRY_DSN` is set correctly
2. Sentry project exists and is active
3. Auth token has correct scopes
4. Check browser console for Sentry errors

### Contact Form Not Sending

**Check:**
1. `RESEND_API_KEY` is set
2. Email domain is verified in Resend
3. From/to addresses are correct
4. Check Vercel function logs

### Custom Domain Not Working

**Wait:** DNS propagation takes 24-48 hours  
**Verify:** Check DNS with `dig cybergl.com` or https://dnschecker.org

---

## 📊 Monitoring Your Deployment

### Vercel Dashboard

**View:**
- Deployments history
- Build logs
- Function logs
- Analytics data
- Speed Insights
- Bandwidth usage

### Sentry Dashboard

**Monitor:**
- Error rates
- Performance metrics
- Session replays
- Release tracking
- User impact

### Analytics

**Track:**
- Page views
- Top pages
- Traffic sources
- User devices
- Geographic distribution

---

## 🎯 Vercel Project Settings Reference

### General Settings
```
Project Name: cyberglobal-ai
Framework: Next.js
Root Directory: ./
Node Version: 20.x
```

### Build & Development Settings
```
Build Command: npm run build
Output Directory: .next (default)
Install Command: npm install --legacy-peer-deps
Development Command: npm run dev
```

### Environment Variables
```
Total: 6 variables
Scope: All environments (Production, Preview, Development)
Sensitive: RESEND_API_KEY, SENTRY_AUTH_TOKEN
Public: NEXT_PUBLIC_CAL_URL, NEXT_PUBLIC_SENTRY_DSN
```

### Domains
```
Primary: cybergl.com (and www.cybergl.com)
Alias: cyberglobal.ai
SSL: Automatic (Let's Encrypt)
```

### Git Configuration
```
Production Branch: main
Preview Branches: All branches with PRs
Ignored Build Step: (none)
```

---

## 🔗 Quick Links

| Service | URL | Purpose |
|---------|-----|---------|
| **Vercel Dashboard** | https://vercel.com/dashboard | Deployments, settings |
| **Sentry** | https://sentry.io | Error monitoring |
| **Resend** | https://resend.com | Email logs |
| **Cal.com** | https://cal.com | Booking management |
| **Google Search Console** | https://search.google.com/search-console | SEO monitoring |

---

## 🎊 Success Criteria

After deployment, you should have:

✅ **Production URL**: https://cybergl.com  
✅ **Alias URL**: https://cyberglobal.ai  
✅ **SSL Certificate**: Valid HTTPS  
✅ **Contact Form**: Sending emails  
✅ **Cal.com**: Booking widget embedded  
✅ **Sentry**: Capturing errors  
✅ **Analytics**: Tracking visitors  
✅ **Speed Insights**: Monitoring performance  
✅ **Preview Deploys**: Working for PRs  

---

## 📝 Deployment Commands

```bash
# View deployment status
vercel

# Deploy to production manually (if needed)
vercel --prod

# View logs
vercel logs

# Check domains
vercel domains ls

# View environment variables
vercel env ls
```

**Note:** Install Vercel CLI: `npm i -g vercel`

---

## 🚨 Emergency Rollback

### If Production Has Issues

1. **In Vercel Dashboard → Deployments**
2. Find previous working deployment
3. Click **"..."** menu → **"Promote to Production"**
4. Instant rollback (< 1 minute)

### Via CLI
```bash
vercel rollback
```

---

## 📧 Update Email Configuration

### Before First Contact Form Use

**1. Verify Domain in Resend**
- Go to https://resend.com/domains
- Add `mail.cybergl.com` subdomain
- Add DNS records (MX, TXT) to your domain

**2. Update API Route**
```typescript
// src/app/api/contact/route.ts
from: "CyberGlobal AI <hello@mail.cybergl.com>"  // ✅ Verified domain
to: ["team@cybergl.com"]  // ✅ Your email
```

**3. Test**
- Submit contact form on production
- Verify email received
- Check deliverability

---

## 🎯 Next Steps After Deployment

### Week 1
- [ ] Monitor Sentry for errors
- [ ] Check Analytics for traffic
- [ ] Verify SEO indexing (Google Search Console)
- [ ] Test on multiple devices
- [ ] Gather feedback

### Month 1
- [ ] Review Speed Insights scores
- [ ] Optimize based on real data
- [ ] Add more case studies
- [ ] Create blog content (optional)
- [ ] A/B test CTAs

### Ongoing
- [ ] Monitor Core Web Vitals
- [ ] Track conversion rates
- [ ] Update content regularly
- [ ] Review Sentry alerts
- [ ] Optimize for performance

---

**Ready to deploy?** Follow this guide step-by-step and you'll be live in 30 minutes! 🚀

**Need help?** All configuration is already done in your code - just add the environment variables and deploy!

