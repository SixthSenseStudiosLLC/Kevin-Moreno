// After the build, rewrite root links ("/services") into relative ones ("../services/") so the
// site works at any address: a GitHub Pages subfolder today, a custom domain later.
// Also writes sitemap.xml and robots.txt for Google.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

export default function relativeLinks() {
  let site;
  return {
    name: 'relative-links',
    hooks: {
      'astro:config:done': ({ config }) => {
        site = config.site?.endsWith('/') ? config.site : `${config.site}/`;
      },
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = await htmlFiles(root);
        const pages = [];
        for (const file of files) {
          const rel = path.relative(root, file).split(path.sep).join('/');
          const from = path.posix.dirname(rel);
          let html = await readFile(file, 'utf8');
          // GitHub serves 404.html at whatever address was missed, so its links must be absolute.
          const base = new URL(site).pathname;
          html = html.replace(/\b(href|src|poster)="\/(?!\/)([^"#?]*)([#?][^"]*)?"/g, (_, attr, target, rest = '') => {
            if (rel === '404.html') return `${attr}="${base}${target}${rest}"`;
            let url = path.posix.relative(from, target) || '.';
            if (target === '' || target.endsWith('/')) url += url.endsWith('/') ? '' : '/';
            else if (!path.posix.extname(target)) url += '/';
            return `${attr}="${url}${rest}"`;
          });
          await writeFile(file, html);
          if (rel !== '404.html') pages.push(rel.replace(/index\.html$/, ''));
        }
        const urls = pages.sort().map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
        await writeFile(
          path.join(root, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );
        await writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', site)}\n`);
      },
    },
  };
}
