// Builds the site into dist/, then copies it into ../docs (what GitHub Pages serves).
// Old files in docs/_astro are kept on purpose: browsers and GitHub's cache can hold an older page
// for a few minutes, and that page must still find its own stylesheet, or it shows up as plain text.
import { execSync } from 'node:child_process';
import { cpSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const here = new URL('..', import.meta.url).pathname;
const dist = join(here, 'dist');
const docs = join(here, '..', 'docs');

execSync('npx astro build', { cwd: here, stdio: 'inherit' });

// Clear everything in docs except the shared asset folder, then copy the new build over it.
for (const name of readdirSync(docs)) {
  if (name !== '_astro') rmSync(join(docs, name), { recursive: true, force: true });
}
cpSync(dist, docs, { recursive: true });
console.log('Published to docs/ (old assets in docs/_astro kept for cached pages).');
