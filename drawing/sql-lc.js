// leetcode profile. 772 = 362 + 334 + 76, out of 4,115.
// this is every problem on the site, so the label says so. not a sql count.
text('leetcode', 550, 120, 68);
text('772', 550, 310, 120);
text('solved', 550, 390, 50);
text('of 4,115', 550, 460, 40, 'middle', '#666');
text('all problems', 550, 520, 40, 'middle', '#666');
text('9 attempting', 550, 590, 40, 'middle', '#666');

const diffs = [['easy', '362 / 976'], ['medium', '334 / 2,148'], ['hard', '76 / 991']];
diffs.forEach((d, i) => {
  const y = 680 + i * 130;
  text(d[0], 120, y + 58, 46, 'start');
  rect(520, y, 460, 96);
  text(d[1], 750, y + 64, 44);
});

text('1,174 submissions', 550, 1120, 46);
text('155 active days', 550, 1185, 44, 'middle', '#666');
text('max streak 12', 550, 1250, 44, 'middle', '#666');
highlight(200, 1280, 700, 76);
text('100 days badge', 550, 1332, 46);
signature();
