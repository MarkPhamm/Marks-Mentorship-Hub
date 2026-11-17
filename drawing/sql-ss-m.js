// phone cut of the stratascratch scoreboard. same numbers, bigger type.
// 624 solved = 249 + 284 + 91. the bank is 815, so 191 are still open.
// language counts overlap. the swipe and the circle are the three sql dialects.
text('stratascratch', 550, 110, 72);

text('624', 270, 280, 116);
text('solved', 270, 360, 52);
text('analytics', 270, 430, 44, 'middle', '#666');
text('191 left', 820, 270, 52);
text('815 total', 820, 350, 48, 'middle', '#666');

const bars = [
  ['easy', '249 / 280', 249 / 280],
  ['medium', '284 / 387', 284 / 387],
  ['hard', '91 / 148', 91 / 148],
];
bars.forEach((b, i) => {
  const y = 510 + i * 150;
  const w = Math.round(360 * b[2]);
  text(b[0], 50, y + 48, 52, 'start');
  text(b[1], 50, y + 108, 44, 'start');
  rect(400, y, w, 120);
});

const langs = [['mysql', '610'], ['mssql', '213'], ['postgres', '123']];
const cw = 300, ch = 190, gap = 20;
const lx = Math.round((1100 - (3 * cw + 2 * gap)) / 2);
const ly = 1000;
highlight(lx - 16, ly - 16, 3 * cw + 2 * gap + 32, ch + 32);
langs.forEach((L, i) => {
  const x = lx + i * (cw + gap);
  rect(x, ly, cw, ch);
  text(L[0], x + cw / 2, ly + 72, 48);
  text(L[1], x + cw / 2, ly + 140, 64);
});
const gx = lx + (3 * cw + 2 * gap) / 2;
const gy = ly + ch / 2;
ell(gx, gy, 3 * cw + 2 * gap + 56, ch + 70, {strokeWidth: 2.6});
arrow([[gx, ly + ch + 130], [gx - 16, ly + ch + 80], [gx, ly + ch + 40]], {strokeWidth: 2.4, stroke: BLUE});
text('sql', gx - 80, ly + ch + 158, 52, 'middle', BLUE);

const py = gx - cw / 2;
rect(py, ly + ch + 200, cw, ch);
text('python', py + cw / 2, ly + ch + 272, 48);
text('169', py + cw / 2, ly + ch + 340, 64);
signature();
