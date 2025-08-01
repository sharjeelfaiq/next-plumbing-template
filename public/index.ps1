# Compress image files in the current directory

$images = Get-ChildItem -Path . -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|webp)$' }

if ($images.Count -eq 0) {
    Write-Host "❌ No image files found in this directory."
    exit
}

foreach ($image in $images) {
    $inputPath = $image.FullName
    $ext = $image.Extension.ToLower()

    try {
        switch ($ext) {
            ".jpg" {
                magick "$inputPath" -strip -interlace Plane -quality 75 "$inputPath"
            }
            ".jpeg" {
                magick "$inputPath" -strip -interlace Plane -quality 75 "$inputPath"
            }
            ".png" {
                magick "$inputPath" -strip -define png:compression-level=7 "$inputPath"
            }
            ".webp" {
                magick "$inputPath" -quality 75 "$inputPath"
            }
            default {
                Write-Host "⚠️ Skipping unsupported format: $($image.Name)"
                continue
            }
        }

        Write-Host "✅ Compressed: $($image.Name)"
    }
    catch {
        Write-Host "❌ Failed to compress $($image.Name): $($_.Exception.Message)"
    }
}
