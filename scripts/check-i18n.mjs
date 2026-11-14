// Checks that every data-i18n key in index.html exists in assets/vi.js, and the reverse.
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const viSrc = readFileSync(new URL('../assets/vi.js', import.meta.url), 'utf8');

const htmlKeys = new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]));
const viKeys = new Set([...viSrc.matchAll(/'([^']+)':/g)].map(m => m[1]));

const missing = [...htmlKeys].filter(k => !viKeys.has(k));
const orphans = [...viKeys].filter(k => !htmlKeys.has(k));

if (missing.length) console.error('missing in vi.js:', missing.join(', '));
if (orphans.length) console.error('in vi.js but not in index.html:', orphans.join(', '));
if (missing.length || orphans.length) process.exit(1);
console.log(`ok: ${htmlKeys.size} keys match`);
