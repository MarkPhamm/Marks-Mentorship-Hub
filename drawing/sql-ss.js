// stratascratch scoreboard. same layout as sql-lc.js so the pair lines up.
// 624 solved = 249 + 284 + 91, out of 815 analytics questions.
// language counts overlap: one question can be solved in more than one dialect.
text('stratascratch', 550, 110, 72);
highlight(240, 245, 620, 150);
text('624 / 815', 550, 360, 120);
text('analytics problems solved', 550, 470, 44);

text('by difficulty', 550, 590, 40, 'middle', '#666');
[['easy', 249, 280], ['medium', 284, 387], ['hard', 91, 148]].forEach(([name, done, all], i) => {
  const y = 630 + i * 105;
  text(name, 60, y + 46, 44, 'start');
  rect(290, y, 480, 60, {strokeWidth: 2.4});
  rect(290, y, Math.round(480 * done / all), 60, {stroke: 'none', fill: INK, fillStyle: 'hachure', hachureGap: 11, fillWeight: 2});
  text(`${done} / ${all}`, 1040, y + 46, 40, 'end');
});

text('solutions by language', 550, 1020, 40, 'middle', '#666');
[['mysql', '610'], ['mssql', '213'], ['postgres', '123'], ['python', '169']].forEach(([name, n], i) => {
  const x = 60 + i * 250;
  rect(x, 1050, 230, 150, {strokeWidth: 2.4});
  text(name, x + 115, 1108, 38);
  text(n, x + 115, 1172, 54);
});
signature();
