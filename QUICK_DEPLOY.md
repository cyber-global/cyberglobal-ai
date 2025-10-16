# ⚡ Quick Deploy Checklist

Copy-paste ready commands and configurations.

---

## 1️⃣ Push to GitHub (5 minutes)

```bash
cd /Users/maria-antoanetapusoiu/Desktop/CGAI/cyberglobal-ai

# Stage everything
git add .

# Commit
git commit -m "feat: production-ready CyberGlobal AI website

- Modern glassy design with Framer Motion
- 7 pages with enterprise AI content  
- Full accessibility + security headers
- Sentry + Vercel Analytics integrated
- 2,719 lines of production code"

# Add your GitHub remote (REPLACE WITH YOUR REPO URL)
git remote add origin https://github.com/YOUR-USERNAME/cyberglobal-ai.git

# Push
git push -u origin main
```

---

## 2️⃣ Import to Vercel (2 minutes)

**Go to:** https://vercel.com/new

1. Click **"Import Git Repository"**
2. Select `cyberglobal-ai`
3. **Before deploying, set environment variables ↓**

---

## 3️⃣ Environment Variables (2 minutes)

**Copy-paste into Vercel → Project Settings → Environment Variables:**

**✅ Select all 3 environments for each variable:**
- ☑️ Production
- ☑️ Preview  
- ☑️ Development

```
Variable 1:
Name: RESEND_API_KEY
Value: [Get from https://resend.com/api-keys]

Variable 2:
Name: NEXT_PUBLIC_CAL_URL
Value: https://cal.com/your-handle/30min

Variable 3:
Name: SENTRY_AUTH_TOKEN
Value: [Get from https://sentry.io/settings/account/api/auth-tokens/]
Required scopes: project:read, project:releases, org:read

Variable 4:
Name: SENTRY_ORG
Value: [Your Sentry organization slug]

Variable 5:
Name: SENTRY_PROJECT
Value: cyberglobal-ai

Variable 6:
Name: NEXT_PUBLIC_SENTRY_DSN
Value: [Get from Sentry Project → Settings → Client Keys (DSN)]
```

---

## 4️⃣ Deploy (3 minutes)

Click **"Deploy"** button in Vercel

Wait for build to complete ✅

---

## 5️⃣ Add Custom Domains (5 minutes)

**In Vercel → Project → Settings → Domains:**

### Add Primary Domain
```
Domain: cybergl.com
Type: Primary domain
```

### Add WWW Subdomain
```
Domain: www.cybergl.com
Redirect to: cybergl.com
```

### Add Alias Domain
```
Domain: cyberglobal.ai
Redirect to: cybergl.com
```

---

## 6️⃣ Configure DNS (10 minutes)

**At your domain registrar (for BOTH domains):**

### For cybergl.com
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

### For cyberglobal.ai
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**Wait:** 24-48 hours for DNS propagation

---

## 7️⃣ Enable Sentry Integration (2 minutes)

**In Vercel → Project → Settings → Integrations:**

1. Search "Sentry"
2. Click "Add"
3. Authorize
4. Select your Sentry organization
5. Select project: `cyberglobal-ai`
6. ✅ Done! Automatic release tracking enabled

---

## 8️⃣ Configure Git Branches (1 minute)

**In Vercel → Project → Settings → Git:**

```
Production Branch: main
Preview Branches: ☑️ Automatic preview deployments
```

**How it works:**
- `main` branch → https://cybergl.com (production)
- PR branches → Unique preview URLs
- Every push rebuilds

---

## 9️⃣ Verify Everything Works (5 minutes)

### Check These:

- [ ] Visit https://cybergl.com (or preview URL)
- [ ] All 7 pages load correctly
- [ ] Animations work (scroll to see)
- [ ] Submit contact form → Check Resend for email
- [ ] Cal.com widget loads on /contact page
- [ ] Check Vercel → Analytics tab (tracking starts)
- [ ] Check Sentry → Issues (should see deployment)
- [ ] Test on mobile device
- [ ] Check lighthouse score (should be 95+)

---

## 🎯 URLs After Deployment

### Production
- https://cybergl.com
- https://www.cybergl.com (redirects to cybergl.com)
- https://cyberglobal.ai (redirects to cybergl.com)

### Vercel Default
- https://cyberglobal-ai-[team].vercel.app

### Preview (Per PR)
- https://cyberglobal-ai-git-[branch]-[team].vercel.app

---

## ⚡ Monitoring Dashboards

After deployment, bookmark these:

- **Vercel**: https://vercel.com/[team]/cyberglobal-ai
- **Analytics**: https://vercel.com/[team]/cyberglobal-ai/analytics  
- **Speed Insights**: https://vercel.com/[team]/cyberglobal-ai/speed-insights
- **Sentry**: https://sentry.io/organizations/[org]/issues/
- **Resend**: https://resend.com/emails
- **Cal.com**: https://cal.com/bookings

---

## 🔧 Quick Fixes

### Contact Form Not Sending

```typescript
// Update these in src/app/api/contact/route.ts:
from: "CyberGlobal AI <hello@mail.cybergl.com>"  // Must be verified in Resend
to: ["team@cybergl.com"]  // Your actual email
```

### Cal.com Not Loading

```
Check: NEXT_PUBLIC_CAL_URL is set correctly
Format: https://cal.com/your-username/30min
```

### Sentry Not Capturing

```
Check: NEXT_PUBLIC_SENTRY_DSN is correct
Format: https://[key]@[region].ingest.sentry.io/[project-id]
```

---

## ✅ Total Time: ~30 minutes

| Step | Time |
|------|------|
| Push to GitHub | 5 min |
| Import to Vercel | 2 min |
| Add env variables | 2 min |
| First deployment | 3 min |
| Add domains | 5 min |
| Configure DNS | 10 min |
| Enable Sentry | 2 min |
| Verification | 5 min |
| **Total** | **~30 min** |

*Plus 24-48 hours for DNS propagation*

---

## 🎉 Done!

After completing these steps, you'll have:

✅ Production site at **cybergl.com**  
✅ Alias domain at **cyberglobal.ai**  
✅ Automatic deployments from main branch  
✅ Preview deployments for PRs  
✅ Vercel Analytics tracking visitors  
✅ Speed Insights monitoring performance  
✅ Sentry tracking errors with releases  
✅ Contact form sending emails  
✅ Cal.com bookings working  

**You're live! 🚀**

---

**Need detailed instructions?** See `DEPLOY_TO_VERCEL.md`  
**Need env var details?** See `VERCEL_ENV_VARS.txt`  
**Need content strategy?** See `CONTENT_STRATEGY.md`

