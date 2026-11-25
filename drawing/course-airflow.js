// course card: learn_airflow — the retries exercise (retries=2, retry_delay=5s from originals/retries.py)
const node=(x,y,w,label,size=34)=>{rect(x,y,w,80);text(label,x+w/2,y+53,size);};
const go=(x1,y1,x2,y2)=>arrow([[x1,y1],[(x1+x2)/2,(y1+y2)/2-10],[x2,y2]],{strokeWidth:2.2});
node(40,140,200,'extract');
node(330,140,220,'transform');
highlight(630,128,250,104);
node(645,140,220,'load',38);
go(240,180,328,180); go(550,180,643,180);
// retry loop
arrow([[840,228],[900,320],[720,320],[700,236]],{strokeWidth:2.6,stroke:BLUE});
text('retry',870,385,32,'middle',BLUE);
text('dag_id: retries',960,90,30,'middle','#444');
// attempts row
const tries=[['try 1','failed'],['try 2','failed'],['try 3','success']];
tries.forEach(([a,b],i)=>{const x=80+i*360;rect(x,440,300,120,{strokeWidth:2.4});text(a,x+150,488,32);text(b,x+150,535,32,'middle',i==2?BLUE:INK);
  if(i<2){go(x+300,500,x+358,500);text('5s',x+330,470,26,'middle','#444');}});
text('retries=2, retry_delay=5s',600,625,30,'middle','#444');
text('mark mentorship',W-40,H-14,26,'end','#666');
