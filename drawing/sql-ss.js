// stratascratch coding rating, snapshot from the profile.
// 624 solved = 249 + 284 + 91. the bank is 815, so 191 are still open.
// language counts overlap: one question can be solved in more than one dialect.
// the violet swipe and the circle mark the three sql dialects. python stays outside.
text('stratascratch', 550, 110, 64);

text('624', 300, 270, 100);
text('solved', 300, 340, 44);
text('analytics', 300, 400, 36, 'middle', '#666');
text('191 left', 760, 260, 48);
text('815 in the bank', 760, 330, 38, 'middle', '#666');

const bars = [
  ['easy', '249 / 280', 249 / 280],
  ['medium', '284 / 387', 284 / 387],
  ['hard', '91 / 148', 91 / 148],
];
bars.forEach((b, i) => {
  const y = 480 + i * 115;
  const w = Math.round(420 * b[2]);
  text(b[0], 70, y + 52, 42, 'start');
  rect(250, y, w, 72);
  text(b[1], 250 + w + 18, y + 50, 34, 'start');
});

const langs = [['mysql', '610'], ['mssql', '213'], ['postgres', '123']];
const cw = 190, ch = 150, gap = 18;
const lx = 60, ly = 860;
highlight(lx - 14, ly - 16, 3 * cw + 2 * gap + 28, ch + 32);
langs.forEach((L, i) => {
  const x = lx + i * (cw + gap);
  rect(x, ly, cw, ch);
  text(L[0], x + cw / 2, ly + 58, 36);
  text(L[1], x + cw / 2, ly + 114, 52);
});
const py = 860;
rect(py, ly, cw, ch);
text('python', py + cw / 2, ly + 58, 36);
text('169', py + cw / 2, ly + 114, 52);
const gx = lx + (3 * cw + 2 * gap) / 2;
const gy = ly + ch / 2;
ell(gx, gy, 3 * cw + 2 * gap + 64, ch + 78, {strokeWidth: 2.6});
arrow([[gx, ly + ch + 175], [gx - 20, ly + ch + 120], [gx, ly + ch + 58]], {strokeWidth: 2.4, stroke: BLUE});
text('sql', gx, ly + ch + 215, 46, 'middle', BLUE);
signature();
