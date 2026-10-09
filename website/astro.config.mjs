import { defineConfig } from 'astro/config';
import relativeLinks from './integrations/relative-links.mjs';

export default defineConfig({
  // The live address. If a custom domain is added, also add public/CNAME containing it.
  site: 'https://sixthsensestudiosllc.github.io/Kevin-Moreno/',
  integrations: [relativeLinks()],
});
