// leetcode scoreboard. same layout as sql-ss.js so the pair lines up.
// the headline is the database set. the difficulty rows are all problems:
// 772 = 362 + 334 + 76, out of 4,115.
text('leetcode', 550, 110, 72);
highlight(240, 245, 620, 150);
text('318 / 323', 550, 360, 120);
text('database problems solved', 550, 470, 44);

text('all problems: 772 / 4,115', 550, 590, 40, 'middle', '#666');
[['easy', 362, 976], ['medium', 334, 2148], ['hard', 76, 991]].forEach(([name, done, all], i) => {
  const y = 630 + i * 105;
  text(name, 60, y + 46, 44, 'start');
  rect(290, y, 480, 60, {strokeWidth: 2.4});
  rect(290, y, Math.round(480 * done / all), 60, {stroke: 'none', fill: INK, fillStyle: 'hachure', hachureGap: 11, fillWeight: 2});
  text(`${done} / ${all.toLocaleString('en-US')}`, 1040, y + 46, 40, 'end');
});

text('activity', 550, 1020, 40, 'middle', '#666');
[['submits', '1,174'], ['days active', '155'], ['streak', '12'], ['badge', '100 days']].forEach(([name, n], i) => {
  const x = 60 + i * 250;
  rect(x, 1050, 230, 150, {strokeWidth: 2.4});
  text(name, x + 115, 1108, name.length > 8 ? 34 : 38);
  text(n, x + 115, 1172, n.length > 5 ? 42 : 54);
});
signature();
