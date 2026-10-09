#!/usr/bin/env bash
# Shrinks a raw video for the website and grabs a still for its poster.
# Usage: scripts/add-video.sh <raw-video> <name> [start-seconds] [length-seconds]
# Writes public/videos/<name>.mp4 (1080p, silent, ~20s max by default) and public/videos/<name>.jpg.
set -euo pipefail
src="$1"; name="$2"; start="${3:-0}"; len="${4:-20}"
out="$(dirname "$0")/../public/videos"
mkdir -p "$out"
ffmpeg -y -loglevel error -ss "$start" -t "$len" -i "$src" \
  -vf "scale='min(1920,iw)':-2,fps=30" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
  -movflags +faststart -an "$out/$name.mp4"
ffmpeg -y -loglevel error -ss "$(echo "$start + 1" | bc)" -i "$src" -frames:v 1 \
  -vf "scale='min(1600,iw)':-2" -q:v 4 "$out/$name.jpg"
ls -lh "$out/$name.mp4" "$out/$name.jpg"
