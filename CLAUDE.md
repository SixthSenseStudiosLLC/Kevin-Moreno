# Sixth Sense Studios / Reliable Kev

The business website lives in `website/` (Astro). It is live at https://sixthsensestudiosllc.github.io/Kevin-Moreno/,
served by GitHub Pages from the `docs/` folder on the `main` branch.

## Updating the live site

1. Make changes in `website/src/` (business details are in `website/src/site.ts`).
2. `cd website && npm ci && npm run build` to check it builds.
3. `npm run publish` rebuilds the live site into `docs/`. Always commit `docs/` with the source change.
4. Get the change onto `main` (merge your working branch into `main` and push). Pushing to `main` puts it live in a minute or two.

Links are rewritten to relative paths after each build (`website/integrations/relative-links.mjs`),
so always link with root paths like `/services` in source; never hand-edit `docs/`.
