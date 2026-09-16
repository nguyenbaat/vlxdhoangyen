$dest = "vlxdhoangyen_hostinger.zip"
if (Test-Path $dest) {
    Remove-Item $dest -Force
}

$files = @(
    "dist",
    "public",
    "src",
    "scripts",
    "package.json",
    "package-lock.json",
    "server.js",
    "app.js",
    "index.js",
    "astro.config.mjs",
    "Dockerfile",
    ".dockerignore",
    ".env.example",
    ".env.cpanel.example",
    "vlxd_hoangyen_mysql.sql",
    "mysql_media_migration.sql",
    "tsconfig.json",
    "AGENTS.md",
    "QUY_CHUAN_CATEGORY_SEO.md"
)

Write-Host "Compressing deploy package for Hostinger..."
Compress-Archive -Path $files -DestinationPath $dest -CompressionLevel Optimal
$size = [math]::Round((Get-Item $dest).Length / 1MB, 2)
Write-Host "SUCCESS: Created $dest ($size MB)"

# Also update clean deploy zip
Copy-Item $dest "vlxdhoangyen_deploy_clean.zip" -Force
Write-Host "SUCCESS: Updated vlxdhoangyen_deploy_clean.zip"
