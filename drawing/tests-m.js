// phone cut of tests.js: the two tests stacked
const bx=170, bw=760, bh=260;
const ly=230;
text('x 1,000 candidates',bx+bw/2,ly-90,56);
for(let k=3;k>=1;k--) rect(bx+k*18,ly-k*18,bw,bh,{strokeWidth:2});
rect(bx,ly,bw,bh,{fill:'#fff',fillStyle:'solid'});
text('passionate about data',bx+bw/2,ly+110,60);
text('strong team player',bx+bw/2,ly+195,60);
text('copy-paste test',bx+bw/2,ly+bh+90,68);
text('anyone can paste it',bx+bw/2,ly+bh+160,52,'middle','#666');
const ry=840;
text('x 1',bx+bw/2,ry-60,56);
highlight(bx+30,ry+50,bw-60,170);
rect(bx,ry,bw,bh);
text('built github.com/an-sql',bx+bw/2,ry+110,58);
text('/metro-dbt',bx+bw/2,ry+195,58);
text('only-me test',bx+bw/2,ry+bh+90,68);
text('true about you, not them',bx+bw/2,ry+bh+160,52,'middle','#666');
signature();
