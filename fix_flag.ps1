param()
$f = 'C:\Users\devel\Downloads\salon-reda\index.html'
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# Morocco flag: Regional Indicator M (U+1F1F2) + Regional Indicator A (U+1F1E6)
$flagM = [System.Char]::ConvertFromUtf32(0x1F1F2)
$flagA = [System.Char]::ConvertFromUtf32(0x1F1E6)
$moroccoFlag = $flagM + $flagA

$content = $content.Replace('\U0001f1f2\U0001f1e6', $moroccoFlag)
$content = $content.Replace('\u0001f1f2\u0001f1e6', $moroccoFlag)

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "Flag fix done. Contains flag: $($content.Contains($moroccoFlag))"
