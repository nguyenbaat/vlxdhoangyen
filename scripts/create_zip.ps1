$dest = "vlxdhoangyen_deploy_clean.zip"
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

Write-Host "Compressing deploy package..."
Compress-Archive -Path $files -DestinationPath $dest -CompressionLevel Optimal
$size = [math]::Round((Get-Item $dest).Length / 1MB, 2)
Write-Host "SUCCESS: Created $dest ($size MB)"
