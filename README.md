# Trend Board

A trend-to-idea generator for short-form video. Works on phone and desktop from the same link.

- **Ideas**: pick an industry (or leave it mixed) and a trend (or all of them), then tap "More ideas" for 6 new clip ideas at a time: hook, what to film, and a caption. "More like this" spins 3 variations off any idea you like. The feed keeps your recent ideas.
- **Trends**: add trends you spot on TikTok, Instagram or Facebook, or tap "Find this month's trends" for formats and seasonal moments. With no trends, ideas come from formats Claude knows are working.
- **Saved**: star ideas to keep them, and copy them all at once.

The app is `trend-board/index.html`. Open it as a Claude artifact so Claude can write ideas; everything saves privately to your account.

The earlier, bigger planning app is still in `shot-caller/`.

## Intake page

`intake/index.html` is a client-facing landing page for Reliable Kev. It asks business owners 5 short steps of questions (business type, goals, kinds of video, platforms, one-time vs monthly, timeline, budget, contact info) and shows a thank-you recap.

- **Logo**: put your logo in `intake/` as `logo.png`. Until then the page shows a "Reliable Kev" wordmark.
- **Getting submissions**: at the top of the `<script>`, set `CONFIG.formEndpoint` to a form service URL (e.g. a free Formspree form) to get each submission by email, or set `CONFIG.email` so submitting opens the visitor's email app with their answers addressed to you.
