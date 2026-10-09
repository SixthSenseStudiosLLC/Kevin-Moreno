# Sixth Sense Studios website

Built with [Astro](https://astro.build). Run it locally:

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the site to dist/
npm run publish  # builds the live site into ../docs (GitHub Pages serves that folder)
```

## Going live

The site is live at https://sixthsensestudiosllc.github.io/Kevin-Moreno/. GitHub Pages serves the `docs/` folder on the `main` branch.
After any change, run `npm run publish`, commit `docs/`, and push to `main`.
The address is set in `astro.config.mjs` (`site`). For a custom domain, change it there and add `public/CNAME`.

## Where things live

- `src/site.ts`: business name, email, phone, hours, socials, services (they feed the menu dropdown, homepage slider, service grid and quote forms), menu
- `src/data/reviews.ts`: client reviews for the Reviews page (real ones only)
- `src/layouts/Page.astro`: inner-page layout (title banner, content, Request a Quote sidebar)
- `src/data/counties.json`: Bergen, Passaic, Sussex
- `src/data/towns.json`: every town you work in, each tagged with its county
- `src/content/stories/`: blog posts (one Markdown file each, tagged with a town)
- `src/content/work/`: portfolio pieces (one Markdown file each, tagged with a town)
- `src/pages/`: the pages themselves
- `src/styles/global.css`: colors, fonts, spacing

## Build plan (one brick at a time)

1. ✅ Foundation: design system, header/footer, content model, homepage, placeholder pages
2. Towns: real town list and town pages
3. Work: portfolio grid with county/town filters, case study pages
4. Services
5. Start a Project (intake form) and Contact
6. Stories (blog)
7. About, Podcast, FAQ
8. Launch: domain, hosting, forms, analytics, SEO
