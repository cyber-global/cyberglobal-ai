# 🚀 CyberGlobal AI - Deployment Guide

## Prerequisites

- ✅ Vercel account (https://vercel.com)
- ✅ GitHub account
- ✅ Domain: cybergl.ai
- ✅ API keys (see below)

---

## 📋 Required API Keys

### 1. **Resend (Email Service)** - REQUIRED
- Sign up: https://resend.com
- Get API key from Dashboard
- Add verified domain: cybergl.ai
- Cost: Free tier (100 emails/day) or $20/month

**Environment Variable:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

### 2. **hCaptcha (Bot Protection)** - REQUIRED
- Sign up: https://www.hcaptcha.com
- Create a new site
- Get Site Key (public) and Secret Key (private)
- Cost: Free

**Environment Variables:**
```
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=10000000-ffff-ffff-ffff-000000000001
HCAPTCHA_SECRET=0x0000000000000000000000000000000000000000
```

### 3. **Cal.com (Meeting Scheduler)** - OPTIONAL
- Sign up: https://cal.com
- Create event type (e.g., "30min")
- Get your booking URL
- Cost: Free tier available

**Environment Variable:**
```
NEXT_PUBLIC_CAL_URL=https://cal.com/your-username/30min
```

### 4. **Upstash Redis (Rate Limiting)** - OPTIONAL
- Sign up: https://upstash.com
- Create Redis database
- Get REST URL and Token
- Cost: Free tier (10,000 commands/day)

**Environment Variables:**
```
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

### 5. **Sentry (Error Monitoring)** - OPTIONAL
- Sign up: https://sentry.io
- Create new project (Next.js)
- Get DSN and Auth Token
- Cost: Free tier (5,000 errors/month)

**Environment Variables:**
```
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```

---

## 🔧 Local Setup

1. **Clone and install:**
```bash
cd /Users/maria-antoanetapusoiu/Desktop/CGAI/cyberglobal-ai
npm install
```

2. **Create `.env.local`:**
```bash
cp .env.example .env.local
```

3. **Add your API keys to `.env.local`**

4. **Test locally:**
```bash
npm run dev
# Visit http://localhost:3000
```

5. **Build for production:**
```bash
npm run build
npm run start
```

---

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy:**
```bash
cd /Users/maria-antoanetapusoiu/Desktop/CGAI/cyberglobal-ai
vercel
```

4. **Follow prompts:**
- Link to existing project? → No
- Project name? → cyberglobal-ai
- Directory? → ./
- Override settings? → No

5. **Add environment variables in Vercel dashboard:**
- Go to: https://vercel.com/your-project/settings/environment-variables
- Add all required variables (see above)
- Click "Redeploy" after adding

6. **Deploy to production:**
```bash
vercel --prod
```

7. **Add custom domain:**
- Go to: https://vercel.com/your-project/settings/domains
- Add: cybergl.ai
- Configure DNS (Vercel will show you the records)

---

### Option 2: GitHub + Vercel (Continuous Deployment)

1. **Initialize git:**
```bash
cd /Users/maria-antoanetapusoiu/Desktop/CGAI/cyberglobal-ai
git init
git add .
git commit -m "Initial commit - CyberGlobal AI website"
```

2. **Create GitHub repository:**
- Go to: https://github.com/new
- Name: cyberglobal-ai
- Don't initialize with README
- Create repository

3. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/cyberglobal-ai.git
git branch -M main
git push -u origin main
```

4. **Import to Vercel:**
- Go to: https://vercel.com/new
- Import Git Repository
- Select your GitHub repo
- Framework: Next.js (auto-detected)
- Root Directory: ./

5. **Add environment variables:**
- During import OR in Settings → Environment Variables
- Add all required variables
- Apply to: Production, Preview, Development

6. **Deploy:**
- Click "Deploy"
- Vercel will build and deploy automatically

7. **Add custom domain:**
- Settings → Domains → Add cybergl.ai
- Configure DNS as instructed

---

## 🔐 Environment Variables Checklist

Copy this to Vercel Environment Variables:

### **Required (Production):**
```
NEXT_PUBLIC_SITE_URL=https://cybergl.ai
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_site_key
HCAPTCHA_SECRET=your_secret_key
```

### **Optional (Recommended):**
```
NEXT_PUBLIC_CAL_URL=https://cal.com/your-username/30min
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```

### **Auto-set by Vercel:**
```
VERCEL_ENV=production
NODE_ENV=production
```

---

## 🌐 DNS Configuration (cybergl.ai)

**Add these records to your domain registrar:**

### **For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Vercel will provide exact values when you add the domain.**

---

## ✅ Pre-Deployment Checklist

Before deploying:

- [ ] All API keys ready
- [ ] `.env.local` configured and tested locally
- [ ] Build successful: `npm run build`
- [ ] Lint passing: `npm run lint`
- [ ] All pages load correctly
- [ ] Contact form works (test with hCaptcha)
- [ ] Cal.com booking widget loads
- [ ] All images load correctly
- [ ] LinkedIn links work
- [ ] Footer contact details correct
- [ ] Domain DNS configured

---

## 🔒 Security Checklist

- [x] Security headers configured (CSP, HSTS)
- [x] hCaptcha on contact form
- [x] Rate limiting (5/hour, Upstash-ready)
- [x] HTML escaping on user input
- [x] HTTPS only (enforced by Vercel)
- [x] No API keys in client code
- [x] GDPR-compliant consent banner
- [ ] Add NEXT_PUBLIC_SENTRY_DSN for error monitoring

---

## 📊 Post-Deployment

After deployment:

1. **Test all pages:**
   - Homepage (test verticals: ?v=finance, ?v=healthcare)
   - About, Services, Business Impact
   - Case Studies, Partners, Contact
   - PentX Product, Privacy, Terms

2. **Test functionality:**
   - Contact form submission
   - hCaptcha verification
   - Cal.com booking
   - All external links
   - Mobile responsiveness

3. **Verify SEO:**
   - Check /sitemap.xml
   - Check /robots.txt
   - Verify OG images
   - Test Google Rich Results

4. **Monitor:**
   - Sentry for errors
   - Vercel Analytics for traffic
   - Contact form submissions

---

## 🎯 Production URLs

- **Main:** https://cybergl.ai
- **Sitemap:** https://cybergl.ai/sitemap.xml
- **Robots:** https://cybergl.ai/robots.txt

**Industry demos:**
- Finance: https://cybergl.ai?v=finance
- Healthcare: https://cybergl.ai?v=healthcare
- Manufacturing: https://cybergl.ai?v=manufacturing
- Public Sector: https://cybergl.ai?v=public

---

## 🆘 Troubleshooting

**Build fails:**
- Check all API keys are set
- Run `npm run build` locally first
- Check Vercel build logs

**Contact form not working:**
- Verify RESEND_API_KEY
- Verify HCAPTCHA_SECRET
- Check domain is verified in Resend

**Images not loading:**
- Verify all images are in `/public`
- Check Vercel deployment includes all assets

**Links not clickable:**
- Test in incognito mode (disable browser extensions)
- Hard refresh browser cache

---

## 📞 Support

**Need help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Resend Docs: https://resend.com/docs

---

**Your website is ready to deploy! 🚀✨**
