# 🚀 Guía de Deploy en Netlify

## Opción 1: Deploy Directo desde Git (Recomendado)

### Pasos:

1. **Sube el proyecto a GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Kayen B2B site"
git branch -M main
git remote add origin https://github.com/tu-usuario/kayen.git
git push -u origin main
```

2. **Conecta Netlify a tu repo**
   - Ve a [netlify.com](https://netlify.com)
   - Click en "New site from Git"
   - Selecciona GitHub y autoriza
   - Elige tu repo `kayen`

3. **Configura Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Habilita "Auto deploy on push"

4. **Deploy automático**
   - Cada push a `main` desplega automáticamente

---

## Opción 2: Deploy Manual (ZIP)

### Pasos:

1. **Extrae el ZIP**
```bash
unzip kayen-netlify-deploy.zip
cd kayen
```

2. **Instala y construye localmente**
```bash
npm install
npm run build
```

3. **Sube a Netlify**
   - Ve a [netlify.com/drop](https://app.netlify.com/drop)
   - Arrastra la carpeta `.next` (o raíz del proyecto)
   - ¡Listo! Te dará una URL pública

---

## Opción 3: Netlify CLI (Más Control)

```bash
# 1. Instala Netlify CLI
npm install -g netlify-cli

# 2. Autentica
netlify login

# 3. Deploy
netlify deploy --prod

# 4. Cuando pregunte por "publish directory", responde:
# .next
```

---

## Variables de Entorno

Antes de desplegar, configura en Netlify:

1. Ve a **Site settings → Build & deploy → Environment**
2. Agrega:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=5491234567890
   ```

3. Reemplaza el número con el tuyo (formato: país + número sin espacios)

---

## Configuración de Dominio

1. **Compra un dominio** (Namecheap, GoDaddy, etc.)
2. En Netlify, ve a **Domain settings**
3. Agrega tu dominio personalizado
4. Sigue las instrucciones de DNS

---

## Formulario de Contacto → WhatsApp

El formulario está conectado a WhatsApp por defecto. Para cambiar el número:

**Edita estos archivos antes de deployar:**
- `components/HeroSection.tsx` (línea 47)
- `components/BusinessModelSection.tsx` (línea 79)
- `components/FloatingWhatsApp.tsx` (línea 17)

Reemplaza `1234567890` con tu número:
```
https://wa.me/5491234567890
```

---

## Monitoreo Post-Deploy

- **Analytics**: Netlify Dashboard → Analytics
- **Build Logs**: Netlify Dashboard → Deploys
- **Performance**: Netlify Dashboard → Analytics → Performance

---

## Troubleshooting

**"Build failed"**
- Verifica que `npm install` funcione localmente
- Revisa los logs en Netlify

**"Your publish directory was not found at: /opt/build/repo/.next/public"**
- **Causa:** netlify.toml apunta a `.next/public` (NO EXISTE)
- **Solución:** Edita `netlify.toml` y cambia todos los `publish`:
  ```toml
  # ❌ INCORRECTO
  publish = ".next/public"
  
  # ✅ CORRECTO
  publish = ".next"
  ```
- **Nota:** El plugin `@netlify/plugin-nextjs` requiere `.next`, no `.next/public`
- Elimina redirects catch-all (`/* -> /index.html`) - rompen Next.js routing

**"Blank page"**
- Asegúrate que `.next` es el publish directory
- Limpia cache: Netlify → Deploys → Clear cache and retry

**"WhatsApp no funciona"**
- Verifica el formato del número (con país)
- Abre la URL en navegador: `https://wa.me/5491234567890`

---

## Recapitulación

✓ Proyecto Next.js listo  
✓ netlify.toml configurado  
✓ Deploy automático habilitado  
✓ Formulario → WhatsApp conectado  

**¡A desplegar!** 🎉
