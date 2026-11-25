// Checks that every local file index.html and 404.html point at (src, srcset, href) exists.
import { readFileSync, existsSync } from 'node:fs';

const missing = [];
for (const page of ['index.html', '404.html']) {
  const html = readFileSync(new URL('../' + page, import.meta.url), 'utf8');
  for (const [, path] of html.matchAll(/(?:src|srcset|href)="(assets\/[^"\s?#]+)/g)) {
    if (!existsSync(new URL('../' + path, import.meta.url))) missing.push(page + ': ' + path);
  }
}
if (missing.length) {
  console.error('missing files:\n' + missing.join('\n'));
  process.exit(1);
}
console.log('ok: every local asset exists');
