# Reliable Kev Media (formerly Sixth Sense Studios)

The business is Reliable Kev Media (renamed from Sixth Sense Studios; the Gmail still has the old name).
The business website lives in `website/` (Astro). It is live at https://reliablekevmedia.github.io/,
served by GitHub Pages from the `docs/` folder on the `main` branch of `reliablekevmedia/reliablekevmedia.github.io`
(the GitHub account was renamed from sixthsensestudiosllc in November 2026).

## Business cards: reprinting with the new QR code (decided Nov 13, 2026)

The first business cards print the old address (https://sixthsensestudiosllc.github.io/Kevin-Moreno/card/), which no
longer works since the GitHub account was renamed. Kev chose to reprint the cards with the new QR code
(`brand/business-card/qr-intake-*.png/svg` → https://reliablekevmedia.github.io/card/) rather than set up forwarding.
The forwarding page (`brand/forwarding/index.html`) and the old codes (`brand/business-card/old-sixthsense-address/`)
are kept only for reference; the forwarding plan is no longer planned.

## Updating the live site

1. Make changes in `website/src/` (business details are in `website/src/site.ts`).
2. `cd website && npm ci && npm run build` to check it builds.
3. `npm run publish` rebuilds the live site into `docs/` (via `scripts/publish.mjs`, which keeps old files in `docs/_astro` so cached pages never lose their stylesheet; never delete them). Always commit `docs/` with the source change.
4. Get the change onto `main` (merge your working branch into `main` and push). Pushing to `main` puts it live in a minute or two.

Links are rewritten to relative paths after each build (`website/integrations/relative-links.mjs`),
so always link with root paths like `/services` in source; never hand-edit `docs/`.

## Adding videos

Kev uploads raw footage as assets on a GitHub Release in this repo (github.com is reachable; most
file-sharing hosts are not). Download it, then run `website/scripts/add-video.sh <raw> <name> [start] [length]`
to write a small 1080p `public/videos/<name>.mp4` plus a `<name>.jpg` poster still, and list the clip in
`website/src/data/drone.ts` (`DRONE_CLIPS`); it then shows in the Drone & Aerial section of the Services page
(grouped by its `section`). Never commit raw footage; keep each clip a few MB.

There is no separate Drone or Work page any more: both are sections of `/services` (`#drone`, `#work`).
`src/pages/drone.astro` and `work.astro` only forward old links there; keep them so saved links don't break.
Likewise Meet Kev is a section of the About page (`/about#meet-kev`, Kev's first-person story); `src/pages/meet-kev.astro`
only forwards the old `/meet-kev/` link there.

## Clean, simple, professional (Kev's direction, Nov 13, 2026)

No background videos anywhere: no drone video behind the pages and no video behind the homepage headline (Kev
found them corny). No slogans either: the motto "It's not reimagining. It's evolution." was removed everywhere at
Kev's request. The free first video is Kev's lead offer ("how I reel them in"), so it is the biggest thing on the
homepage: the hero (`src/components/HomeHero.astro`) opens on "Your first video is free" with the main button, then
the proof right under it: "Trusted by local businesses across New Jersey", every client logo at once
(`src/data/clients.ts`) and Kev's credentials (`VALUE_POINTS` in `src/data/home.ts`). While the offer is on, the menu
button reads "Free First Video", the phone bar "Free video", the Services page opens with an offer strip, and the
quote form lists "My free first video" first. Offer links go to `/start?free=1`, which ticks that choice on the
intake form. The short link `/free` (`src/pages/free.astro`, for Instagram stories and texts) forwards there. `FIRST_VIDEO_FREE.on = false` puts everything back to "Start a Project". The page is near black (`--bg`
#0b0b0a fading to `--charcoal` #1c1b19), not gray. Keep the homepage short (intro, featured work, why choose, services,
free first video). The RK mark appears only on the logo, the footer, the card page and the opening. The opening plays at most once a
day on a device, never on a refresh (`.intro` in `Base.astro`, styles at the end of `global.css`; `?intro=1` plays it
once more and is then removed from the address; skipped for reduced motion): the RK letters on black, then the page.
On the homepage it is a short story (Kev's idea, from the Arcade app): RK letters, then Kev's before and after photos
side by side in one frame (stacked on a phone held upright), in color with the exposure dimmed
(`public/images/intro/`: `kev-then.jpg` cut from `kev-before-after.jpg`, and `kev-now.jpg`, Kev smiling with his
Canon; give replaced images a new file name so phones do not keep showing a cached copy), under his quote "You deserve to be heard.", then the page (about
6 s; both photos appear at the same moment as one still frame, no zoom; any tap, scroll or key skips it).
Drone clips still belong in the Services page (`#drone`) as work samples. The old hero montage can be rebuilt with
`website/scripts/build-hero-reel.sh` (shots in `hero-reel.txt`) only if Kev asks for it back.

## Voice: formal and professional (Kev's direction, Nov 13, 2026)

Site copy is formal: no contractions, no casual phrases ("no-pressure", "straight number", "just ask"); "complimentary
consultation" for the first call; "event coverage", "clients", "municipalities". Two exceptions on purpose: Kev's
own story in the Meet Kev section of the About page stays in his first-person voice, and the DIY page stays plain
and simple (written so anyone can follow it).

## Waiting on Kev

- **Certifications**: when Kev is an FAA-certified drone pilot (Part 107) and Adobe certified, add them to the
  value points (`VALUE_POINTS` in `src/data/home.ts`, already drafted in a comment there).
- **Free first video terms** (updated with Kev, Nov 13, 2026): `FIRST_VIDEO_FREE` in `src/data/pricing.ts` (homepage
  hero, pricing box, FAQ, phone scroll, intake form choice). One short vertical video up to 60 s, open to anyone new
  (not only businesses), one per client, North Jersey. No planning session is included; say it as a plus ("nothing
  to plan or prepare"), never as a limitation. `on: false` turns the offer off everywhere.
- **Event packages (decided Nov 13, 2026)**: the half and full day are shoot rates for general events, priced as before
  (from $500 / from $1,100). Half day: 5 short vertical clips. Full day: a 2–3 minute highlight video + 6 clips. No
  planning call and no sit-down Q&A built in; those and everything else (brand films, podcasts, monthly content) are a
  custom quote. "How an event day goes" (`EVENT_DAY`) is the default outline for clients without a schedule. All in
  `src/data/pricing.ts`.
- **Phone scroll go-ahead**: on phones the homepage can be one menu-free scroll (`src/components/PhoneHome.astro`).
  It is preview-only (a phone that opened the site with `?phone=1`) until Kev approves; then set
  `PHONE_SCROLL_LIVE = true` in `src/layouts/Base.astro`.

## Business back end (never shown on the site)

Kev's contracts and templates live in his Google Drive folder "Reliable Kev Media — Business System" (Business
Playbook, Video Proposal v3, Monthly Content Proposal, Collaboration Agreement v3, Appearance Release, Lead
Tracker). Keep website promises in line with the Playbook's house rules: 1 revision round, captions included on short
vertical clips, raw footage is an add-on, delivery 2–3 weeks. Do not put deposits, rate card or contract terms on the
site. Do not claim FAA compliance or Part 107 until Kev is certified.

## Look: sleek and seamless, with red accents (Kev's direction, Nov 13, 2026)

Kev found the Liquid Glass bubble shapes didn't look right, so the site is now flat and sleek: near-black surfaces,
hairline borders, small corners (`--radius-s` 4px for buttons, inputs, chips and badges; `--card-radius` 6px for cards
and forms; `--media-radius` 4px for photos and video), no glossy rims, no pill or bubble shapes. The top bar is
full-width in the page's own black with one hairline under it (no floating capsule); the phone bar is pinned flush to
the bottom edge. Red (`--red` #c8232f, hover `--red-bright`) is the accent: primary buttons, the "Start a Project"
menu button, the thin underline on the current/hovered menu tab, checks, badges, the line on top of cream forms
and cards, the ticker dots, the rule under page titles, the lens's brand ring and link underlines. Tokens and the
shared `.btn`/`.glass`/`.checks` rules live in `src/styles/global.css` (the old `--glass-*` names are kept so every
component picks up the look). Reuse them for anything new. Pages breathe (Kev found them tight): big gaps between sections
(about 72–112px), and each section opens on a hairline with a short red mark (rules in `src/layouts/Page.astro` and
`src/pages/index.astro`). Key photos and videos get camera-frame corners (`.viewfinder` in `global.css`): the
featured video, the drone banner and the photos on the About page. Wide 21:9 stills from Kev's own footage
(`src/components/FilmStill.astro`, files in `public/images/stills/`) break up long pages: homepage (bar carry, before
Our Services), Services (before Drone & Aerial and before Pricing) and About (before The foundation). Service titles
on the Services page carry a thin red line icon (`src/data/icons.ts`, shared with the homepage service grid). Keep
these accents few. The RK mark is the letters only, no circle
(`BrandMark` draws a circle only with `ring`).

## Business card QR code (do not break)

Printed business cards point at `/card/` (the project intake, `src/pages/card.astro`). Never rename,
move or remove that page. `/card/` and the website's `/start/` share one form, `src/components/IntakeForm.astro`.
The build fails on purpose (`integrations/guard-qr-page.mjs`) if `/card/` or its form is missing.
QR artwork lives in `brand/business-card/` (new address, for the reprinted cards); the codes printed on the first
cards (old address, no longer working) are in `brand/business-card/old-sixthsense-address/`.
