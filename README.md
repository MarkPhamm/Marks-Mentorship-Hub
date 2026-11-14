# Mentorship-Website

markmentorship.com — one-page site for Mark's data mentorship. Plain HTML/CSS/JS, no build step, hosted on GitHub Pages.

## Edit copy

- English lives in `index.html`. Every translatable element has a `data-i18n="key"`.
- Vietnamese lives in `assets/vi.js`, keyed by those attributes.
- After editing either, run `node scripts/check-i18n.mjs` — it fails if a key is missing on one side.

## Refresh the numbers

The stats in `index.html` drift. Sources: SQL problems and GitHub contributions (the `Mentorships` playbook), Xóm Data members (the Facebook group), qdbd downloads (`https://pypistats.org/packages/quickdbd-cli`, last month), releases and stars (GitHub). Checked 2026-11-15.

## Add mentees

Edit `assets/mentees.js`. The mentee section stays hidden while the array is empty. Only add someone after they have agreed to be named.

## Re-render drawings

Drawings are made with the `draw-like-me` style: rough.js + Architects Daughter, violet `#7c3aed`, blue `#2f6fdb`.

```bash
cd drawing
npm i                                   # roughjs + font, first time only
uv run --with playwright python3 make.py hero   # or: how, note
cp hero.png ../assets/img/
```

Each drawing is a small JS file (`drawing/hero.js`, `how.js`, `note.js`) rendered by `make.py`.

## Preview locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Launch assets

`launch/` holds the LinkedIn announcement: `launch-square.png` (1600x1600 card) and `linkedin-post.md` (post draft, EN + VI). Edit before posting.

## Other files

- `404.html`: GitHub Pages serves it for unknown paths.
- `assets/img/og.png`: the social preview card (og:image, 1200x630).
- `robots.txt`, `sitemap.xml`: SEO plumbing, nothing to maintain.

## Deploy

Push to `main`. GitHub Pages serves the repo root (`CNAME` points at markmentorship.com, `.nojekyll` disables Jekyll).

`images/` holds the Substack drawing archive and is not referenced by the site; only copies in `assets/img/` ship.
