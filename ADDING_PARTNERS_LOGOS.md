# Adding Partner Logos & Descriptions

## 🎯 How to Add External Content

I've created the partner page structure, but you need to add:
1. Partner logos (from their websites)
2. Partner descriptions (from their websites)
3. CyberGlobal logo for About page

---

## 📥 Download Logos

### Manual Process:

**For each partner:**
1. Visit their website
2. Right-click on their logo → "Save Image As..."
3. Save as SVG or PNG (SVG preferred)
4. Save to `/public/partners/` directory

**Partners to add:**
- CyberGlobal (cybergl.com) → Save as `/public/partners/cyberglobal.svg`
- PentX AI (pentx.ai) → Save as `/public/partners/pentx-ai.svg`
- CTDefense (ctdefense.com) → Save as `/public/partners/ctdefense.svg`
- Cube-Enterprise (cube-enterprise.com) → Save as `/public/partners/cube-enterprise.svg`
- CyberLegal (cyberlgl.com) → Save as `/public/partners/cyberlegal.svg`

---

## 📝 Get Descriptions

Visit each website and copy a 1-2 sentence description of what they do.

### Then update:

**`src/content/partners.ts`** - Add descriptions  
**`src/components/AboutContent.tsx`** - Add CyberGlobal description

---

## 🖼️ Logo File Structure

```
/public/
  ├── partners/
  │   ├── cyberglobal.svg (or .png)
  │   ├── pentx-ai.svg
  │   ├── ctdefense.svg
  │   ├── cube-enterprise.svg
  │   └── cyberlegal.svg
  └── cyberglobal-logo.svg (for About page)
```

---

## ⚠️ Important Notes

**Copyright:** Make sure you have permission to use their logos  
**File size:** Optimize logos (< 50KB each)  
**Format:** SVG preferred for crisp scaling  
**Naming:** Use kebab-case for consistency  

---

## 🔧 After Adding Logos

Update the partner data in `src/content/partners.ts` with actual descriptions, then the components will automatically display them!

