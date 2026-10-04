# Trend Board

A trend-to-idea generator for short-form video. Works on phone and desktop from the same link.

- **Ideas**: pick an industry (or leave it mixed) and a trend (or all of them), then tap "More ideas" for 6 new clip ideas at a time: hook, what to film, and a caption. "More like this" spins 3 variations off any idea you like. The feed keeps your recent ideas.
- **Trends**: add trends you spot on TikTok, Instagram or Facebook, or tap "Find this month's trends" for formats and seasonal moments. With no trends, ideas come from formats Claude knows are working.
- **Saved**: star ideas to keep them, and copy them all at once.

The app is `trend-board/index.html`. Open it as a Claude artifact so Claude can write ideas; everything saves privately to your account.

The earlier, bigger planning app is still in `shot-caller/`.

## Intake page

`intake/index.html` is a client-facing landing page for Reliable Kev. Business owners leave their phone number, email and a note about what they want to do with video, and can request a call by picking one of the next 9 weekdays and a time (9 AM to 5 PM, in their local time). Change the times in `CONFIG.callTimes`.

- **Logo**: `intake/logo.png` is the white RK monogram. The page shows it dark on the light theme and white on the dark theme, next to the "Reliable Kev" name. `favicon.png` is the monogram on a dark tile for browser tabs and phone home screens.
- **Getting submissions (FormSubmit)**: each submission is emailed to sixthsensestudiosllc@gmail.com through formsubmit.co (no account needed), titled "New video inquiry", or "Call request: <day>, <time>" when they book a call. Hitting reply goes straight to the business owner. The very first submission from the live site sends a one-time "Activate form" email to that inbox; click the button in it, and every submission after that is delivered. To change the address, edit `CONFIG.formEndpoint` at the top of the `<script>` in `intake/index.html`. To also show a link to a Calendly or Cal.com calendar under the times, set `CONFIG.bookingUrl`.
- **Putting it online (GitHub Pages)**: in this repo on GitHub go to Settings → Pages, set Source to "Deploy from a branch", pick the branch holding this page and the `/ (root)` folder, and save. After a minute the page is live at https://kevinmoreno2661-cyber.github.io/Kevin-Moreno/ (the root `index.html` forwards to `intake/`).
