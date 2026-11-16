# Mentorship-Website

markmentorship.com — one-page site for Mark's data mentorship. Plain HTML/CSS/JS, no build step, hosted on GitHub Pages.

## Edit copy

- English lives in `index.html`. Every translatable element has a `data-i18n="key"`.
- Vietnamese lives in `assets/vi.js`, keyed by those attributes.
- After editing either, run `node scripts/check-i18n.mjs` — it fails if a key is missing on one side.

## Refresh the numbers

The stats in `index.html` drift. Sources: SQL problems (the `Mentorships` playbook), Xóm Data members (the Facebook group), releases and stars (GitHub). Checked 2026-11-15.

Three things refresh themselves. `.github/workflows/contrib.yml` runs every night and commits whatever changed: `scripts/fetch-feeds.sh qdbd` writes `assets/qdbd.json` (last month's qdbd downloads from pypistats, shown rounded down to the hundred); a fetch that fails keeps the previous file. `scripts/fetch-contrib.sh` writes `assets/contrib.json` (total, start date, and one level digit 0-4 per day). `assets/site.js` draws the graph under the hero stats from that file and fills the contributions stat. Run the script by hand with `gh` logged in to refresh it now. If the file is missing the graph stays hidden.

The latest-posts list under "what I'll teach you" does not refresh itself: Substack answers 403 to GitHub's runners. After publishing a post, run `scripts/fetch-feeds.sh posts` on a laptop and push `assets/posts.json`.

## Add mentees

Edit `assets/mentees.js`. The mentee section stays hidden while the array is empty. Only add someone after they have agreed to be named.

## Re-render drawings

Drawings are made with the `draw-like-me` style: rough.js + Architects Daughter, violet `#7c3aed`, blue `#2f6fdb`.

```bash
cd drawing
npm i                                   # roughjs + font, first time only
uv run --with playwright python3 make.py hero   # or: how, note, offer
cp hero.png ../assets/img/
```

Each drawing is a small JS file (`drawing/hero.js`, `how.js`, `note.js`, `offer.js`) rendered by `make.py`. Each of those four has a phone cut (`hero-m.js` and so on, 1100px wide with bigger labels) that `index.html` serves below 640px through `<picture>`; change both when you change one. `portrait.js` is the sketch in the about section.

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

Push to `main`. GitHub Pages serves the repo root at https://markphamm.github.io/Marks-Mentorship-Hub/ (`.nojekyll` disables Jekyll).

The custom domain is not set up yet. When markmentorship.com is registered: add a `CNAME` file containing `markmentorship.com`, then replace `https://markphamm.github.io/Marks-Mentorship-Hub/` with `https://markmentorship.com/` in `index.html`, `404.html`, `sitemap.xml` and `robots.txt`. `launch/` already uses the domain.

`images/` holds the Substack drawing archive and is not referenced by the site; only copies in `assets/img/` ship.
