# 자동 푸시 스크립트 (PowerShell)
# 사용법: .\auto-push.ps1 "커밋 메시지"

param(
    [string]$Message = "Auto-save: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

Write-Host "🔄 변경사항 확인 중..." -ForegroundColor Cyan
git status --short

$hasChanges = git diff --quiet --exit-code
$hasStaged = git diff --cached --quiet --exit-code

if (-not $hasChanges -and -not $hasStaged) {
    Write-Host "✅ 커밋할 변경사항이 없습니다." -ForegroundColor Green
    exit 0
}

Write-Host "📦 변경사항 스테이징 중..." -ForegroundColor Cyan
git add .

Write-Host "💾 커밋 중..." -ForegroundColor Cyan
git commit -m $Message

if ($LASTEXITCODE -eq 0) {
    Write-Host "🚀 푸시 중..." -ForegroundColor Cyan
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 푸시 완료!" -ForegroundColor Green
    } else {
        Write-Host "❌ 푸시 실패. 수동으로 확인해주세요." -ForegroundColor Red
    }
} else {
    Write-Host "❌ 커밋 실패." -ForegroundColor Red
}

