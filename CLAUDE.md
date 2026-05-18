# Kayen B2B Website - Claude Code Guide

## 📌 Info Básica

- **Proyecto:** Kayen - Sitio Web B2B Premium
- **Stack:** Next.js 15 + React + Tailwind CSS + Framer Motion + TypeScript
- **Deployment:** Netlify (automático) / Vercel (compatible)
- **Status:** Production-Ready

## 🔗 Referencias Globales
- Guía Global: `/_core/CLAUDE.md`
- Skills: `/_core/SKILLS.md`
- Estructura: `/_core/README.md`

## 🎨 Guía de Diseño

Usa **taste-skill** para garantizar:
- Diseño premium sin clichés IA
- Animaciones spring physics
- Tipografía Geist (no Inter)
- Colores neutrales + acentos sutiles
- Layout asimétrico (variance 8)

## 📦 Archivos Clave

```
app/                    # Next.js App Router
components/             # React (HeroSection, FormSection, FloatingWhatsApp, etc.)
public/                 # Assets estáticos
.claude/                # Config Claude
CLAUDE.md              # Documentación (este archivo)
DEPLOYMENT.md          # Deploy instructions
netlify.toml           # Netlify config
tailwind.config.js     # Theme
tsconfig.json          # TS config + global.d.ts para CSS imports
```

## 🛠️ Desarrollo Local

```bash
npm install
npm run dev              # http://localhost:3000
npm run build && npm start
```

## 📧 WhatsApp Integration

Actualizar número en **4 archivos:**
1. `components/HeroSection.tsx`
2. `components/BusinessModelSection.tsx`
3. `components/FloatingWhatsApp.tsx`
4. `app/page.tsx`

URL: `https://wa.me/TU_NUMERO` (formato: país+número, ej: 5491234567890)

Usar `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=5491234567890
```

## 🐛 Problemas Comunes & Soluciones

| Problema | Solución |
|----------|----------|
| TypeScript CSS imports error | Crear `global.d.ts`: `declare module '*.css';` + agregar `**/*.d.ts` en `tsconfig.json` include |
| Icon no existe en Phosphor | Verificar en [Phosphor docs](https://phosphoricons.com) → reemplazar (ej: TrendingUp → ArrowUpRight) |
| `@/components/` no se resuelve | Usar imports relativos: `import Hero from '../components/HeroSection'` |
| Netlify publish error `.next/public` | Cambiar en `netlify.toml`: `publish = ".next"` (NO `.next/public`) |

**Nota:** NO usar redirects catch-all (`/* -> /index.html`) con Next.js. El plugin `@netlify/plugin-nextjs` maneja routing automáticamente.

## 📋 Checklist Pre-Deploy

- [ ] `npm run build` pasa localmente
- [ ] WhatsApp número actualizado en 4 archivos
- [ ] Imágenes reales (no placeholders)
- [ ] `.gitignore` incluye: `node_modules`, `.next`, `.env.local`
- [ ] `package-lock.json` commiteado
- [ ] `tsconfig.json` + `global.d.ts` correctos

## 🚀 Deploy Workflow

### Git Push
```bash
git add .
git commit -m "feat: kayen b2b website"
git push origin main
```

### Build Local
```bash
npm run build
```

### Opción A: Netlify Automático (RECOMENDADO)
GitHub está conectado a Netlify → push dispara build automático.

### Opción B: Manual ZIP + Netlify Drag-Drop
```bash
# Windows PowerShell:
.\deploy.ps1

# macOS/Linux:
bash deploy.sh
```
Sube ZIP a [Netlify drag-drop](https://app.netlify.com/drop)

### Opción C: Vercel
1. [vercel.com/new](https://vercel.com/new)
2. Importar repo GitHub
3. Click "Deploy"

## 📝 Últimos Cambios

| Fecha | Cambio | Responsable |
|-------|--------|-------------|
| 2026-04-29 | Diseño B2B + Netlify setup | ccarrascosamur |
| 2026-04-29 | Fix TS + icons + deploy doc | ccarrascosamur |

## 🚀 Cómo Empezar

1. Lee este CLAUDE.md
2. Lee DEPLOYMENT.md para detalles
3. `npm install`
4. `npm run dev`
5. Abre http://localhost:3000
6. Edita `components/` o `app/`
7. Push → Netlify deploya automáticamente
