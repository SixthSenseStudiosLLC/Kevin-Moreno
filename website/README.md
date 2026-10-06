# Sixth Sense Studios website

Built with [Astro](https://astro.build). Run it locally:

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the site to dist/
```

## Where things live

- `src/site.ts`: business name, tagline, email, phone, socials, menu
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
