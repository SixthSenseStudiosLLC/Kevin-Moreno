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
- **Getting submissions (Formspree, free)**: sign up at formspree.io with the email you want inquiries sent to, create a new form, and copy its link (looks like `https://formspree.io/f/abcd1234`). Paste it into `CONFIG.formEndpoint` at the top of the `<script>` in `intake/index.html`. Each submission then arrives as an email titled "New video inquiry", or "Call request: <day>, <time>" when they book a call, and hitting reply goes straight to the business owner. To also show a link to a Calendly or Cal.com calendar under the times, set `CONFIG.bookingUrl`. Send one test submission yourself first; Formspree asks you to confirm the form on the first one.
- **Putting it online**: the `intake/` folder is a plain static site (`index.html`, `logo.png`, `favicon.png`). Host it with GitHub Pages, Netlify or any web host, then share the link in your bio, DMs and email signature.
