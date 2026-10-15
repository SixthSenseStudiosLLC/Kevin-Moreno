// The printed business card QR code points at /card/. If a change ever removes that page or its
// form, stop the build so the broken site is never published.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export default function guardQrPage() {
  return {
    name: 'guard-qr-page',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const file = path.join(fileURLToPath(dir), 'card', 'index.html');
        const html = await readFile(file, 'utf8').catch(() => '');
        const problems = [];
        if (!html) problems.push('the /card/ page is missing');
        else {
          if (!html.includes('data-quote')) problems.push('the /card/ page has no intake form');
          if (!/action="https:\/\/formsubmit\.co\/[^"]+@[^"]+"/.test(html)) problems.push('the /card/ form does not send to an email address');
          for (const field of ['name', 'email', 'phone']) {
            if (!html.includes(`name="${field}"`)) problems.push(`the /card/ form is missing the ${field} field`);
          }
        }
        if (problems.length) {
          throw new Error(`Business card QR code would break: ${problems.join('; ')}. Fix /card/ before publishing.`);
        }
      },
    },
  };
}
