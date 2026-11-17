// phone cut of the leetcode scoreboard. 772 = 362 + 334 + 76, out of 4,115.
// every problem on the site, so the label says so.
text('leetcode', 550, 120, 76);
text('772', 550, 320, 132);
text('solved', 550, 410, 56);
text('of 4,115', 550, 490, 48, 'middle', '#666');
text('all problems', 550, 560, 48, 'middle', '#666');
text('9 attempting', 550, 630, 48, 'middle', '#666');

const diffs = [['easy', '362 / 976'], ['medium', '334 / 2,148'], ['hard', '76 / 991']];
diffs.forEach((d, i) => {
  const y = 720 + i * 170;
  text(d[0], 60, y + 78, 52, 'start');
  rect(340, y, 690, 130);
  text(d[1], 685, y + 84, 50);
});

highlight(140, 1300, 820, 180);
text('database', 550, 1375, 52);
text('318 / 323', 550, 1450, 68);
text('1,174 submissions', 550, 1580, 50);
text('155 active days', 550, 1655, 46, 'middle', '#666');
text('max streak 12', 550, 1725, 46, 'middle', '#666');
text('100 days badge', 550, 1800, 46, 'middle', '#666');
signature();
