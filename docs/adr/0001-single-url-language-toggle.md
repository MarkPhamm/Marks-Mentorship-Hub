# 1. Single URL with a client-side language toggle

Date: 2026-11-15

## Status

Accepted

## Context

The site is one static page on GitHub Pages in English and Vietnamese. The alternatives were separate paths (`/` and `/vi/`, duplicated HTML or a build step) or one URL with a JavaScript toggle swapping text from a dictionary.

## Decision

One URL. English lives in the markup; `assets/vi.js` holds a dictionary keyed by `data-i18n` attributes; `assets/site.js` swaps text, remembers the choice in `localStorage`, and honours `?lang=vi` so Vietnamese links can be shared directly (e.g. in Xóm Data).

## Consequences

- No build step and no duplicated HTML; `scripts/check-i18n.mjs` keeps the dictionary and markup in sync.
- Search engines index only the English text; the Vietnamese version is invisible to SEO. Accepted: the audience arrives via LinkedIn, Substack and Xóm Data links, not search.
- Without JavaScript the page is English-only.
- If SEO in Vietnamese ever matters, move to `/vi/` with prerendered HTML; the `data-i18n` keys make that extraction mechanical.
