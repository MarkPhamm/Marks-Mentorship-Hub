// what we work on: the copy-paste test vs the only-me test, on one resume line
// left: the line 1,000 candidates could paste
const lx=90, ly=230, bw=640, bh=300;
for(let k=3;k>=1;k--) rect(lx+k*18,ly-k*18,bw,bh,{strokeWidth:2});   // the stack of copies
rect(lx,ly,bw,bh,{fill:'#fff',fillStyle:'solid'});
text('passionate about data',lx+bw/2,ly+120,50);
text('strong team player',lx+bw/2,ly+200,50);
text('x 1,000 candidates',lx+bw/2,ly-90,46);
text('copy-paste test',lx+bw/2,ly+bh+100,56);
text('anyone can paste it',lx+bw/2,ly+bh+170,44,'middle','#666');
// right: the line only one person can write
const rx=870;
highlight(rx+30,ly+65,bw-60,180);
rect(rx,ly,bw,bh);
text('built github.com/an-sql',rx+bw/2,ly+120,48);
text('/metro-dbt',rx+bw/2,ly+200,48);
text('x 1',rx+bw/2,ly-90,46);
text('only-me test',rx+bw/2,ly+bh+100,56);
text('true about you, not them',rx+bw/2,ly+bh+170,44,'middle','#666');
signature();
