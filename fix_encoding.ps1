# Fix all literal \uXXXX escape sequences in index.html and main.js
$files = @(
    'C:\Users\devel\Downloads\salon-reda\index.html',
    'C:\Users\devel\Downloads\salon-reda\main.js'
)

# Map of escape -> actual character
$replacements = [ordered]@{
    '\u00e0' = 'à'
    '\u00e1' = 'á'
    '\u00e2' = 'â'
    '\u00e3' = 'ã'
    '\u00e4' = 'ä'
    '\u00e5' = 'å'
    '\u00e6' = 'æ'
    '\u00e7' = 'ç'
    '\u00e8' = 'è'
    '\u00e9' = 'é'
    '\u00ea' = 'ê'
    '\u00eb' = 'ë'
    '\u00ec' = 'ì'
    '\u00ed' = 'í'
    '\u00ee' = 'î'
    '\u00ef' = 'ï'
    '\u00f0' = 'ð'
    '\u00f1' = 'ñ'
    '\u00f2' = 'ò'
    '\u00f3' = 'ó'
    '\u00f4' = 'ô'
    '\u00f5' = 'õ'
    '\u00f6' = 'ö'
    '\u00f8' = 'ø'
    '\u00f9' = 'ù'
    '\u00fa' = 'ú'
    '\u00fb' = 'û'
    '\u00fc' = 'ü'
    '\u00fd' = 'ý'
    '\u00ff' = 'ÿ'
    '\u00c0' = 'À'
    '\u00c1' = 'Á'
    '\u00c2' = 'Â'
    '\u00c3' = 'Ã'
    '\u00c4' = 'Ä'
    '\u00c5' = 'Å'
    '\u00c6' = 'Æ'
    '\u00c7' = 'Ç'
    '\u00c8' = 'È'
    '\u00c9' = 'É'
    '\u00ca' = 'Ê'
    '\u00cb' = 'Ë'
    '\u00cc' = 'Ì'
    '\u00cd' = 'Í'
    '\u00ce' = 'Î'
    '\u00cf' = 'Ï'
    '\u00d0' = 'Ð'
    '\u00d1' = 'Ñ'
    '\u00d2' = 'Ò'
    '\u00d3' = 'Ó'
    '\u00d4' = 'Ô'
    '\u00d5' = 'Õ'
    '\u00d6' = 'Ö'
    '\u00d8' = 'Ø'
    '\u00d9' = 'Ù'
    '\u00da' = 'Ú'
    '\u00db' = 'Û'
    '\u00dc' = 'Ü'
    '\u00dd' = 'Ý'
    '\u00de' = 'Þ'
    '\u00df' = 'ß'
    '\u0152' = 'Œ'
    '\u0153' = 'œ'
    '\u0160' = 'Š'
    '\u0161' = 'š'
    '\u0178' = 'Ÿ'
    '\u017d' = 'Ž'
    '\u017e' = 'ž'
    '\u0192' = 'ƒ'
    '\u2013' = '–'
    '\u2014' = '—'
    '\u2018' = '''
    '\u2019' = '''
    '\u201a' = '‚'
    '\u201c' = '"'
    '\u201d' = '"'
    '\u201e' = '„'
    '\u2020' = '†'
    '\u2021' = '‡'
    '\u2022' = '•'
    '\u2026' = '…'
    '\u2030' = '‰'
    '\u2039' = '‹'
    '\u203a' = '›'
    '\u20ac' = '€'
    '\u2122' = '™'
    '\u00a0' = ' '
    '\u00a9' = '©'
    '\u00ae' = '®'
    '\u00b0' = '°'
    '\u00b7' = '·'
    '\u00d7' = '×'
    '\u00f7' = '÷'
    '\u2550' = '═'
    '\u2551' = '║'
    '\u2554' = '╔'
    '\u2557' = '╗'
    '\u255a' = '╚'
    '\u255d' = '╝'
}

foreach ($file in $files) {
    Write-Host "Processing: $file"
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    $original = $content

    foreach ($key in $replacements.Keys) {
        $val = $replacements[$key]
        $content = $content.Replace($key, $val)
    }

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
        Write-Host "  -> Fixed and saved."
    } else {
        Write-Host "  -> No changes needed."
    }
}

# Verify
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    $hasEscapes = $false
    foreach ($key in $replacements.Keys) {
        if ($content.Contains($key)) {
            Write-Host "  WARNING: Still contains $key in $file"
            $hasEscapes = $true
        }
    }
    if (-not $hasEscapes) {
        Write-Host "CLEAN: $file"
    }
}
