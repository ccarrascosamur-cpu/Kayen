# Kayen B2B Website - Claude Code Guide

## 📌 Info Básica

- **Proyecto:** Kayen - Sitio Web B2B Premium
- **Stack:** Next.js 15 + React + Tailwind CSS + Framer Motion + TypeScript
- **Deployment:** Cloudflare Workers
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

### Deploy a Cloudflare Workers
```bash
npm run deploy
```

Requiere:
- `wrangler` autenticado (`npx wrangler login`)
- `wrangler.jsonc` configurado

## 📝 Últimos Cambios

| Fecha | Cambio | Responsable |
|-------|--------|-------------|
| 2026-04-29 | Diseño B2B + Cloudflare setup | ccarrascosamur |
| 2026-04-29 | Fix TS + icons + deploy doc | ccarrascosamur |

## 🚀 Cómo Empezar

1. Lee este CLAUDE.md
2. `npm install`
3. `npm run dev`
4. Abre http://localhost:3000
5. Edita `components/` o `app/`
6. Push → Cloudflare Workers deploya automáticamente
