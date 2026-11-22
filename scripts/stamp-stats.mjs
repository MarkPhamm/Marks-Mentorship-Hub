// Writes the homepage's no-JS fallback numbers from the JSON the nightly job already publishes.
// A missing or invalid file leaves that figure untouched. Rounding matches assets/site.js.
import { readFileSync, writeFileSync } from 'node:fs';

const htmlPath = new URL('../index.html', import.meta.url);
const original = readFileSync(htmlPath, 'utf8');
let html = original;

function load(name) {
  try {
    return JSON.parse(readFileSync(new URL('../' + name, import.meta.url), 'utf8'));
  } catch {
    return null;
  }
}

function replaceStrong(htmlText, pattern, value) {
  if (!pattern.test(htmlText)) throw new Error('fallback marker not found: ' + pattern);
  return htmlText.replace(pattern, function (_match, open, close) { return open + value + close; });
}

const contrib = load('assets/contrib.json');
if (contrib && Number.isInteger(contrib.total) && contrib.total > 0 && typeof contrib.levels === 'string' && /^[0-4]+$/.test(contrib.levels)) {
  const year = contrib.levels.length > 365 ? contrib.levels.slice(-365) : contrib.levels;
  html = replaceStrong(html, /(<strong data-contrib="total">)[^<]*(<\/strong>)/, contrib.total.toLocaleString('en-US'));
  html = replaceStrong(html, /(<strong data-contrib="active">)[^<]*(<\/strong>)/, String(year.replace(/0/g, '').length));
}

const qdbd = load('assets/qdbd.json');
if (qdbd && typeof qdbd.last_month === 'number' && qdbd.last_month > 0) {
  const shown = (Math.floor(qdbd.last_month / 100) * 100).toLocaleString('en-US') + '+';
  html = replaceStrong(html, /(<strong id="qdbd-month">)[^<]*(<\/strong>)/, shown);
}

if (html !== original) writeFileSync(htmlPath, html);
