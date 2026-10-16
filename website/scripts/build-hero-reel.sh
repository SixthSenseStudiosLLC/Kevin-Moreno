#!/usr/bin/env bash
# Builds the homepage hero reel (public/videos/hero-reel.mp4 + .jpg) from the shots in scripts/hero-reel.txt:
# each shot cropped to 16:9, joined with short dissolves, silent, small enough to autoplay.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
videos="$here/../public/videos"
list="${1:-$here/hero-reel.txt}"
fade=0.5; w=1280; h=720

inputs=(); filters=""; n=0; offset=0; prev=""
while read -r file start len; do
  [[ -z "${file:-}" || "$file" == \#* ]] && continue
  src="$file"; [[ -f "$src" ]] || src="$videos/$file"
  [[ -f "$src" ]] || { echo "missing video: $file" >&2; exit 1; }
  inputs+=(-ss "$start" -t "$len" -i "$src")
  filters+="[$n:v]crop='min(iw,ih*16/9)':'min(ih,iw*9/16)',scale=$w:$h,fps=30,format=yuv420p,setsar=1,setpts=PTS-STARTPTS[v$n];"
  if (( n == 0 )); then prev="v0"; offset=$len
  else
    offset=$(echo "$offset - $fade" | bc)
    filters+="[$prev][v$n]xfade=transition=fade:duration=$fade:offset=$offset[x$n];"
    prev="x$n"; offset=$(echo "$offset + $len" | bc)
  fi
  n=$((n + 1))
done < "$list"

ffmpeg -y -loglevel error "${inputs[@]}" -filter_complex "${filters%;}" -map "[$prev]" \
  -c:v libx264 -profile:v high -level 4.0 -preset slow -crf 31 -pix_fmt yuv420p -movflags +faststart -an "$videos/hero-reel.mp4"
ffmpeg -y -loglevel error -ss 1.5 -i "$videos/hero-reel.mp4" -frames:v 1 -q:v 5 "$videos/hero-reel.jpg"
ls -lh "$videos/hero-reel.mp4" "$videos/hero-reel.jpg"
