# Kayen B2B - Deploy Script (PowerShell)
# Generates production ZIP in project directory

$ErrorActionPreference = "Stop"

$ProjectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$ZipName = "kayen-production_${Timestamp}.zip"
$ZipPath = Join-Path $ProjectDir $ZipName

Write-Host ""
Write-Host "📦 Kayen B2B - Production Build & ZIP" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

# 1. Build check
Write-Host ""
Write-Host "🔨 Building production bundle..." -ForegroundColor Yellow
try {
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Build failed!" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Build error: $_" -ForegroundColor Red
    exit 1
}

# 2. Create ZIP
Write-Host ""
Write-Host "📦 Creating ZIP file: ${ZipName}" -ForegroundColor Yellow

Push-Location $ProjectDir

# Compress files, excluding unnecessary directories
$ExcludeFolders = @('.next', 'node_modules', '.git', '.DS_Store')
$ExcludePattern = $ExcludeFolders -join '|'

Get-ChildItem -Path $ProjectDir -Recurse -Force |
    Where-Object {
        $path = $_.FullName.Replace($ProjectDir, '').TrimStart('\')
        -not ($path -match "^(\.next|node_modules|\.git)" -or $path -match '\.zip$')
    } |
    Compress-Archive -DestinationPath $ZipPath -Update -Force

Pop-Location

if (Test-Path $ZipPath) {
    $Size = (Get-Item $ZipPath).Length / 1MB
    Write-Host "✅ ZIP created: ${ZipName} (${Size:F2} MB)" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to create ZIP" -ForegroundColor Red
    exit 1
}

# 3. Summary
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✨ Ready to deploy!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 ZIP location: ${ZipPath}"
Write-Host "📊 ZIP size: $([Math]::Round((Get-Item $ZipPath).Length / 1MB, 2)) MB"
Write-Host ""
Write-Host "🚀 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Upload to Netlify: https://app.netlify.com/drop"
Write-Host "   2. Or push to GitHub for auto-deploy"
Write-Host "   3. Check status at: https://kayen.netlify.app/"
Write-Host ""
