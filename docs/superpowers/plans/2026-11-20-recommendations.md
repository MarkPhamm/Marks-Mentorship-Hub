# Recommendations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show all 18 LinkedIn recommendations in `#proof`: 5 students as full quotes, 13 colleagues as one-line compact boxes, Insurify first.

**Architecture:** Static HTML in `index.html`, extending the existing `.quotes` grid; one CSS modifier `.quotes.compact`; two new i18n keys. No JS.

**Tech Stack:** Plain HTML/CSS, `assets/vi.js`, `scripts/check-i18n.mjs`.

**Spec:** `docs/superpowers/specs/2026-11-20-recommendations-design.md`

## Global Constraints

- Quotes verbatim from the spec, English in both languages.
- Recommendations URL: `https://www.linkedin.com/in/minhbphamm/details/recommendations/`
- External links: `target="_blank" rel="noopener"`, like the existing quotes.
- Commits carry no AI attribution trailer.

## Review Focus

- Phone width (375px): compact grid is one column, no horizontal scroll.
- VI toggle: `proof.h3` and `proof.all` switch; quotes stay English.
- Dark theme / rough.js boxes render on the 13 new `data-sketch="box"` boxes.
- Keyboard: every name link is focusable and visibly outlined.
- Odd 5th student box sits alone without stretching awkwardly.

---

### Task 1: Recommendations markup, style, i18n

**Files:**
- Modify: `index.html` (`#proof`, after the Max Brinker blockquote, before `#mentee-wall`)
- Modify: `assets/style.css:276-279` (add `.quotes.compact` rules after)
- Modify: `assets/vi.js:98` (add two keys after `proof.h2`)

- [ ] **Step 1:** Add Ethan Liu blockquote as 5th in `.quotes`, same shape as the others; name links to the recommendations URL; role `Data @ Insurify`; quote from spec.
- [ ] **Step 2:** After `.quotes`, add `<h3 class="hand" data-i18n="proof.h3" data-reveal>and people I worked with</h3>` and `<div class="quotes compact" data-reveal-group>` with 13 `<blockquote data-sketch="box">` in spec order (Noah, Aaron, Peter, Steven, Derek, Liam, Vu, Gary, Kelly, Tom, Josef, Tu, Hubert). Each: `<p>“quote”</p><footer class="hand"><a href=REC_URL …>Name</a> — Role</footer>`.
- [ ] **Step 3:** After that div: `<p class="aside"><a href=REC_URL target="_blank" rel="noopener" data-i18n="proof.all">read all 18 on LinkedIn ↗</a></p>`.
- [ ] **Step 4:** CSS: `.quotes.compact` uses `minmax(min(260px, 100%), 1fr)`, `gap: 16px`; its blockquote padding `14px 16px`, `p` font-size `16px`; `#proof h3` margin-top `36px`.
- [ ] **Step 5:** vi.js: `'proof.h3': 'và những người mình đã làm cùng',` and `'proof.all': 'đọc cả 18 lời giới thiệu trên LinkedIn ↗',`.
- [ ] **Step 6:** Run `node scripts/check-i18n.mjs`. Expected: `ok: N keys match` (N = previous + 2).
- [ ] **Step 7:** Serve on a free port (not 8123), screenshot `#proof` at 1280px and 375px in EN and VI; confirm Review Focus items.
- [ ] **Step 8:** Commit spec, plan and changes: `git commit -m "Add all 18 LinkedIn recommendations to people I've taught, Insurify colleagues first."`
