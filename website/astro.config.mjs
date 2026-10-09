import { defineConfig } from 'astro/config';
import relativeLinks from './integrations/relative-links.mjs';

export default defineConfig({
  // The live address. public/CNAME must match it for GitHub Pages.
  site: 'https://sixthsensestudios.com/',
  integrations: [relativeLinks()],
});
