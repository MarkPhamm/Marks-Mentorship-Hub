// leetcode scoreboard: the Database study plan only (310 questions). same layout as sql-ss.js so the pair lines up.
// 305 solved = 112 + 137 + 56. 5 unsolved, 1 of them attempting.
text('leetcode', 550, 110, 72);
highlight(240, 245, 620, 150);
text('305 / 310', 550, 360, 120);
text('database problems solved', 550, 470, 44);

text('by difficulty', 550, 590, 40, 'middle', '#666');
[['easy', 112, 112], ['medium', 137, 137], ['hard', 56, 61]].forEach(([name, done, all], i) => {
  const y = 630 + i * 105;
  text(name, 60, y + 46, 44, 'start');
  rect(290, y, 480, 60, {strokeWidth: 2.4});
  rect(290, y, Math.round(480 * done / all), 60, {stroke: 'none', fill: INK, fillStyle: 'hachure', hachureGap: 11, fillWeight: 2});
  text(`${done} / ${all}`, 1040, y + 46, 40, 'end');
});

text('the database set', 550, 1020, 40, 'middle', '#666');
[['questions', '310'], ['solved', '305'], ['to go', '5'], ['attempting', '1']].forEach(([name, n], i) => {
  const x = 60 + i * 250;
  rect(x, 1050, 230, 150, {strokeWidth: 2.4});
  text(name, x + 115, 1108, name.length > 8 ? 34 : 38);
  text(n, x + 115, 1172, 54);
});
signature();
