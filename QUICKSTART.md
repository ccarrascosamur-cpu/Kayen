# 🚀 Kayen B2B - Quick Start

## 60-Second Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
# → http://localhost:3000
```

## Deploy in 3 Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "feat: update kayen website"
git push origin main
```
→ Netlify auto-deploys

### Step 2: Create ZIP (optional, for manual upload)
```bash
# Windows:
.\deploy.ps1

# macOS/Linux:
bash deploy.sh
```

### Step 3: Verify
→ Check https://kayen.netlify.app/

---

## File Structure (Important)

```
components/          ← Edit React components here
├── HeroSection.tsx
├── BenefitsSection.tsx
├── FormSection.tsx   ← WhatsApp contact form
└── ...

app/
├── page.tsx          ← Main page (imports components)
├── layout.tsx        ← HTML structure + fonts
└── globals.css       ← Global styles

tailwind.config.js    ← Custom colors, theme
```

---

## Common Tasks

### Change WhatsApp Number
1. `components/FloatingWhatsApp.tsx` (line 17)
2. `components/FormSection.tsx` (line 45)
3. Format: `5491234567890` (país+número)

### Update Colors
Edit `tailwind.config.js`:
- `cream: '#FFF8F3'`
- `gold: '#D4AF37'`

### Add New Section
1. Create `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add `<NewSection />` to JSX

### Update Text Content
Edit component JSX directly. All text is hardcoded (no CMS needed for B2B site).

---

## Build Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Check code quality |

---

## Troubleshooting

### Build fails locally?
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Components not showing?
Check that:
- ✓ Import paths use `../components/` (not `@/components/`)
- ✓ Component names match file names exactly
- ✓ No typos in component names

### WhatsApp link not working?
Verify:
- ✓ Number is international format: `5491234567890`
- ✓ No spaces or special characters
- ✓ Format: `https://wa.me/5491234567890`

### Styles not applying?
- Tailwind classes need to be in JSX strings
- Custom colors defined in `tailwind.config.js`
- Global styles in `app/globals.css`

---

## Need Help?

1. **Local dev issues?** → Check `CLAUDE.md` "Problemas Conocidos"
2. **Deploy issues?** → See `DEPLOYMENT.md` step-by-step
3. **TypeScript errors?** → Usually fix: `npm install --save-dev typescript @types/react @types/node`

---

**Project:** Kayen B2B (Next.js 15 + React + Tailwind + Framer Motion)  
**Deployed:** Netlify (auto-deploy from GitHub)  
**Tech Stack:** Node.js, npm, Git
