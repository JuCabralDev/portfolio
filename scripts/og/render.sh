#!/usr/bin/env bash
# Gera public/og-pt.png e public/og-en.png a partir de og.html (precisa do Chromium e de node_modules instalado).
set -euo pipefail
cd "$(dirname "$0")"
for lang in pt en; do
  chromium --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --virtual-time-budget=3000 --window-size=1200,630 \
    --screenshot="../../public/og-$lang.png" "file://$PWD/og.html#$lang" 2>/dev/null
done
echo "ok: public/og-pt.png public/og-en.png"
