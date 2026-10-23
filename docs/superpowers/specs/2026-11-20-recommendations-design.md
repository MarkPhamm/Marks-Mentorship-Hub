# Recommendations in "people I've taught" — design

## Why
More named people backing Mark makes the site more credible. All 18 are on
https://www.linkedin.com/in/minhbphamm/details/recommendations/ (Mark, 2026-11-20),
so every card can point a visitor there to check.

## Goals / non-goals
- Goal: show all 18 recommendations, students first, each linked to LinkedIn.
- Non-goal: the IDE file window (a9cc706, reverted), photos, carousels, JS.
- Anti-goal: the section stops reading as "people I taught".

## Approach (picked)
Static HTML in `index.html`, same as today's 4 quotes. Rejected: a data file
plus JS renderer (the reverted `assets/recs.js`, 525 lines for 18 fixed quotes).

## Layout
```
people I've taught
[ Mia ] [ Gwen ]          existing .quotes grid, 5 boxes
[ Yuki ] [ Max ]
[ Ethan ]
and people I worked with                     h3
[Noah] [Vu] [Aaron]                          .quotes.compact, 3 columns, 1 on phone
[Gary] [Peter] [Steven] ...                  13 small boxes: one line, name, role
read all 18 on LinkedIn ↗
```

## Content
Taught (5): Mia, Gwen, Yuki, Max (existing quotes unchanged), plus Ethan Liu,
Data @ Insurify: "As my mentor in analytics engineering, he guided me through the
AE Academy and pushed me to think beyond just writing code — to really understand
the data, the business context, and the reasoning behind each decision."

Worked with (13), in this order, verbatim excerpts. Insurify colleagues first (Mark, 2026-11-20):
- Noah Pelberg, Product & Analytics @ Insurify: "If I'm starting a business tomorrow, Mark is my first analytics engineering hire."
- Aaron Chen, Senior Analytics Engineer @ Insurify: "He's genuinely versed in the mechanics of how tools like dbt, Snowflake, and Redshift work under the hood."
- Peter Manto, Business Data Analyst @ Insurify: "The human dictionary of our tech stack."
- Steven Egnaczyk, Product @ Insurify: "It was evidently clear from the beginning that he is a 1 of 1 individual."
- Derek Le, Data @ Insurify: "If he doesn't know, he will by next Monday."
- Liam Fitz, Operations Lead @ Datavations, ex-Insurify: "He's a great teammate, friend, and teacher."
- Vu Trinh, Data Engineer · vutr.substack.com: "Although he sees me as his mentor, there are actually many things I have learned — and continue to learn — from him."
- Gary Klinger, Python for Data Analytics Professor, TCU: "He is at the top of my class."
- Kelly Slaughter, BIS Program Director, TCU: "Minh has not only “learned to learn” but done so under his own initiative."
- Tom Kinch, Senior Data Engineer, Lazard: "You were the best intern ever!"
- Josef Cohen, Associate Data Engineer, Meta (ex-Lazard): "He always meticulously documented every process and project he worked on."
- Tu Nguyen, Senior Analytics Engineer @ GPBank: "A natural problem-solver who tackles complex challenges with precision and attention to detail."
- Luo Hubert, Data Analytics VP, Lazard: "The work linking the models to Snowflake and PowerBI are both big improvements."

## Links
- Names with a known profile (Mia, Gwen, Yuki, Max) keep their profile link.
- Every other name links to the recommendations page (no per-recommendation URL exists).
- One "read all 18 on LinkedIn ↗" link closes the section.

Build ruling: Noah's box and the 5th student box span the full row, so 13
compact boxes and 5 student boxes leave no lone box at 2 or 3 columns.

## i18n
Quotes stay English in both languages, as today. New keys `proof.h3` and
`proof.all` go in `assets/vi.js`; `scripts/check-i18n.mjs` must pass.

## Left to the builder
`.quotes.compact` CSS (smaller padding and font, `data-sketch="box"` kept),
spacing, reveal attributes matching the section.
