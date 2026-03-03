param()
$ErrorActionPreference = 'Stop'

$files = @(
    'C:\Users\devel\Downloads\salon-reda\index.html',
    'C:\Users\devel\Downloads\salon-reda\main.js',
    'C:\Users\devel\Downloads\salon-reda\style.css'
)

$pattern = '\\u([0-9a-fA-F]{4})'

foreach ($f in $files) {
    Write-Host "Reading $f ..."
    $content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
    $count = [System.Text.RegularExpressions.Regex]::Matches($content, $pattern).Count
    Write-Host "  Found $count escape sequences"

    if ($count -gt 0) {
        $result = [System.Text.RegularExpressions.Regex]::Replace(
            $content,
            $pattern,
            {
                param($m)
                [string][char][Convert]::ToInt32($m.Groups[1].Value, 16)
            }
        )
        [System.IO.File]::WriteAllText($f, $result, [System.Text.Encoding]::UTF8)
        Write-Host "  -> Saved."
    } else {
        Write-Host "  -> Nothing to do."
    }
}

Write-Host ""
Write-Host "=== Verification ==="
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
    $remaining = [System.Text.RegularExpressions.Regex]::Matches($content, $pattern).Count
    if ($remaining -eq 0) {
        Write-Host "CLEAN: $f"
    } else {
        Write-Host "WARNING - $remaining escapes remain in: $f"
    }
}
