@echo off
REM ---------------------------------------------------------------------------
REM  Sobe o site para visualizar no navegador.
REM
REM  De dois cliques neste arquivo pelo Explorador de Arquivos, NAO pelo terminal
REM  do VS Code: assim o servidor fica preso a esta janela e nao ao editor, e
REM  continua de pe quando voce fecha o VS Code.
REM
REM  Para parar o servidor, feche esta janela preta.
REM ---------------------------------------------------------------------------
setlocal
title Site MSM - servidor local
cd /d "%~dp0"

REM O otimizador de imagens do Next trava neste Windows (ver next.config.ts).
set NEXT_IMAGE_UNOPTIMIZED=1

REM Se o site ja estiver de pe (outra janela destas, ou o Claude), so abre o
REM navegador: a porta esta fixada, entao subir um segundo servidor daria erro.
powershell -NoProfile -Command "try { Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing -TimeoutSec 3 | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
if not errorlevel 1 (
    echo.
    echo    O site ja esta rodando. Abrindo o navegador...
    echo.
    start "" http://localhost:3000
    timeout /t 3 /nobreak >nul
    exit /b 0
)

echo.
echo    Subindo o site em http://localhost:3000
echo    O navegador abre sozinho em alguns segundos.
echo.
echo    Feche esta janela para parar o servidor.
echo.

REM Abre o navegador so depois que o servidor ja responde.
start "" /b powershell -NoProfile -Command "for ($i=0; $i -lt 60; $i++) { try { Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing -TimeoutSec 2 | Out-Null; Start-Process 'http://localhost:3000'; break } catch { Start-Sleep -Milliseconds 500 } }"

call npm run dev

echo.
echo    O servidor parou.
pause
