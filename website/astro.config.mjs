import { defineConfig } from 'astro/config';
import relativeLinks from './integrations/relative-links.mjs';

export default defineConfig({
  // Where the site lives. Change this when a custom domain is set up.
  site: 'https://sixthsensestudiosllc.github.io/Kevin-Moreno/',
  integrations: [relativeLinks()],
});
