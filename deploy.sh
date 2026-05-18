#!/bin/bash

# Kayen B2B - Deploy Script
# Generates production ZIP in project directory

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ZIP_NAME="kayen-production_${TIMESTAMP}.zip"
ZIP_PATH="${PROJECT_DIR}/${ZIP_NAME}"

echo "📦 Kayen B2B - Production Build & ZIP"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Build check
echo ""
echo "🔨 Building production bundle..."
npm run build || { echo "❌ Build failed!"; exit 1; }

# 2. Create ZIP (exclude node_modules, .next, .git)
echo ""
echo "📦 Creating ZIP file: ${ZIP_NAME}"
cd "${PROJECT_DIR}"

if command -v tar &> /dev/null; then
  # Use tar if available
  tar --exclude='node_modules' \
      --exclude='.next' \
      --exclude='.git' \
      --exclude='.DS_Store' \
      --exclude='*.zip' \
      -czf "${ZIP_PATH}" \
      --exclude='dist' \
      .
  echo "✅ ZIP created (tar): ${ZIP_NAME}"
else
  # Fallback to 7z if available
  if command -v 7z &> /dev/null; then
    7z a "${ZIP_PATH}" . \
      -x!'node_modules' \
      -x!'.next' \
      -x!'.git' \
      -x!'*.zip' > /dev/null 2>&1
    echo "✅ ZIP created (7z): ${ZIP_NAME}"
  else
    echo "❌ Neither tar nor 7z found. Install one to create ZIP."
    exit 1
  fi
fi

# 3. Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Ready to deploy!"
echo ""
echo "📍 ZIP location: ${ZIP_PATH}"
echo "📊 ZIP size: $(ls -lh "${ZIP_PATH}" | awk '{print $5}')"
echo ""
echo "🚀 Next steps:"
echo "   1. Upload to Netlify: https://app.netlify.com/drop"
echo "   2. Or push to GitHub for auto-deploy"
echo "   3. Check status at: https://kayen.netlify.app/"
echo ""
