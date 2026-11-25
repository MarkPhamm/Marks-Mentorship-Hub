# Mentorship-Website

markmentorship.com — one-page site for Mark's data mentorship. Plain HTML/CSS/JS, no build step, hosted on GitHub Pages.

## Edit copy

- English lives in `index.html`. Every translatable element has a `data-i18n="key"`.
- Vietnamese lives in `assets/vi.js`, keyed by those attributes.
- After editing either, run `node scripts/check-i18n.mjs` — it fails if a key is missing on one side. The same check runs on every push and pull request. Placeholders, accessible names, and note-line prefixes use `data-i18n-placeholder`, `data-i18n-aria`, and `data-i18n-prefix`.

## Refresh the numbers

The stats in `index.html` drift. Sources: SQL problems (the `Mentorships` playbook), Xóm Data members (the Facebook group), releases and stars (GitHub). Checked 2026-11-15.

Three things refresh themselves. `.github/workflows/contrib.yml` runs every night and commits whatever changed. The calendar fetch and the downloads fetch are separate: one failing still lets the other commit, and the job stays red. `scripts/fetch-feeds.sh qdbd` writes `assets/qdbd.json` (last month's qdbd downloads from pypistats, shown rounded down to the hundred); a fetch that fails keeps the previous file. `scripts/fetch-contrib.sh` writes `assets/contrib.json` (total, start date, and one level digit 0-4 per day). `node scripts/stamp-stats.mjs` copies those figures into the hero in `index.html`, so the page is right with JavaScript off. The active-day caption uses the last 365 days. `assets/site.js` draws the graph from the same file and replaces the numbers when the JSON loads. Run the scripts by hand (`gh` logged in for the calendar) to refresh them now. If the contributions file is missing the graph stays hidden.

The "latest from the handbook" list does not refresh itself: Substack answers 403 to GitHub's runners. After publishing a post, run `scripts/fetch-feeds.sh posts` on a laptop, add the post's `<li>` to its track in the "everything I've written" panel in `index.html`, and push both.

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

Each drawing is a small JS file (`drawing/hero.js`, `how.js`, `note.js`, `offer.js`) rendered by `make.py`. Each of those four has a phone cut (`hero-m.js` and so on, 1100px wide with bigger labels) that `index.html` serves below 640px through `<picture>`; change both when you change one. `portrait.js` is the sketch in the about section; `projects.js` (the skytrax pipeline) and `findings.js` (the dashboard KPIs, snapshot 2026-07-30 from the skytrax_reviews README) also have `-m` cuts. `sql-ss.js` and `sql-lc.js` are the StrataScratch and LeetCode scoreboards under the SQL stat. They share one layout and size, so change both together; each image on the page links to that profile. `explorer.js` is the sketch on Tien's project card, standing in for a screenshot until his live explorer loads data again. The other card pictures are hand-drawn from each mentee repo's real numbers (`drawing/proj-*.js`), rendered by `make.py` and saved as `assets/img/proj-*.webp`.

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

## Analytics

Google Tag Manager `GTM-KVM572XB` loads GA4 `G-QJ2R5R43M1`; Microsoft Clarity project `zevcpmfyfc`. Both snippets sit in the `<head>` of `index.html` and `404.html`, after a consent script that denies cookies until the visitor says yes in the banner (`initConsent` in `assets/site.js`, choice kept in `localStorage.consent`). Copying a LinkedIn note sends a `note_copy` event to both. The note builder carries `data-clarity-mask` so typed notes never show in recordings.

## Deploy

Push to `main`. GitHub Pages serves the repo root at https://markmentorship.com/ (`CNAME` sets the domain, `.nojekyll` disables Jekyll). The old https://markphamm.github.io/Marks-Mentorship-Hub/ address redirects there.

The full URL is written out in `index.html` (canonical, og and twitter tags, JSON-LD), `404.html` (`<base>`), `sitemap.xml` and `robots.txt`. Change all of them if the domain ever changes.

`images/` holds the Substack drawing archive and is not referenced by the site; only copies in `assets/img/` ship.
