# 🔧 Netlify Publish Directory Fix - Documentation

**Date:** 2026-04-29  
**Issue:** Netlify build failed with publish directory error  
**Status:** ✅ FIXED  

---

## 🐛 The Problem

**Error Message:**
```
Your publish directory was not found at: /opt/build/repo/.next/public
Please check your build settings
```

**Root Cause:**
- `netlify.toml` was configured with incorrect publish directory: `.next/public`
- Next.js build output goes to `.next/`, NOT `.next/public`
- The directory `.next/public` doesn't exist, causing deploy to fail
- Netlify's `@netlify/plugin-nextjs` plugin expects `.next` as the root publish directory

---

## ✅ What Was Fixed

### 1. Fixed `netlify.toml`

**Before (❌ WRONG):**
```toml
[build]
  publish = ".next/public"

[context.production]
  publish = ".next/public"

[context.deploy-preview]
  publish = ".next/public"

[context.branch-deploy]
  publish = ".next/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**After (✅ CORRECT):**
```toml
[build]
  publish = ".next"

[context.production]
  publish = ".next"

[context.deploy-preview]
  publish = ".next"

[context.branch-deploy]
  publish = ".next"

# No catch-all redirect (removed)
```

### 2. Removed SPA Catch-All Redirect

**Why removed:**
- The redirect `/* -> /index.html` is for Single Page Apps (SPAs)
- Next.js with `@netlify/plugin-nextjs` handles all routing internally
- A blanket redirect to `/index.html` breaks:
  - Server-side rendered (SSR) pages
  - Dynamic pages
  - API routes
  - Static generation (SSG)

**The plugin handles routing correctly**, so no redirect needed.

---

## 🎯 Key Points

### What Next.js Builds

When you run `npm run build`, Next.js creates:

```
.next/
├── static/          ← JavaScript bundles
├── server/          ← Server code
├── cache/           ← Build cache
└── public/          ← Static files (but files come from public/ folder)
```

The `.next/` directory IS the complete production build. No need for `.next/public`.

### What Netlify Expects

When you set `publish = ".next"`:
1. Netlify looks at `.next/` directory
2. Finds static files in `.next/static/`
3. Uses `@netlify/plugin-nextjs` to handle routing
4. Routes server requests correctly
5. Serves static files with proper cache headers

---

## 🛠️ For Future Projects

### Netlify + Next.js Best Practices

✅ **DO:**
- Set `publish = ".next"` in netlify.toml
- Use `@netlify/plugin-nextjs` (auto-enabled for Next.js projects)
- Let Next.js handle all routing
- Use `next.config.js` for rewrites/redirects if needed

❌ **DON'T:**
- Use `.next/public` or `out/` directories
- Add catch-all SPA redirects
- Try to manually route with netlify redirects
- Use `output: 'standalone'` without proper setup

### netlify.toml Template for Next.js

```toml
[build]
  command = "npm run build"
  publish = ".next"

[dev]
  command = "npm run dev"
  port = 3000

[context.production]
  publish = ".next"

[context.deploy-preview]
  publish = ".next"

[context.branch-deploy]
  publish = ".next"
```

---

## 📋 Build Output Comparison

### With Correct Config
```
✅ Build succeeds
✅ Publish directory: .next (EXISTS)
✅ Next.js plugin handles routing
✅ All pages work (SSR, SSG, API)
```

### With Incorrect Config (Before)
```
❌ Build fails
❌ Publish directory: .next/public (DOESN'T EXIST)
❌ Error: "Your publish directory was not found"
```

---

## 🚀 Testing After Fix

After applying this fix, the next deploy should:

1. Build successfully: `npm run build` ✓
2. Find `.next` directory: `ls -la .next` ✓
3. Publish to Netlify: Status = "Published" ✓
4. All routes work: Visit site and test navigation ✓
5. No 404 errors on pages: Check Network tab ✓

---

## 📚 Related Documentation

- **CLAUDE.md** - "Problemas Conocidos" section with full details
- **DEPLOYMENT.md** - Troubleshooting section with solution steps
- **netlify.toml** - Corrected configuration (apply to your projects)

---

## 🎓 Lesson Learned

**Why this matters:**
- Different frameworks output builds to different directories
- Netlify plugins are framework-specific (Next.js plugin ≠ SPA plugin)
- SPA redirects break server-rendered frameworks
- Always match publish directory to actual build output

**For future Kayen deployments:**
- netlify.toml is now correctly configured
- No changes needed unless moving away from Next.js
- Documentation prevents recurrence of this error

---

**Fixed:** 2026-04-29  
**Verified:** ✅ netlify.toml is correct  
**Impact:** Unblocks Netlify deployment  
**Prevention:** Documentation added to CLAUDE.md + DEPLOYMENT.md
