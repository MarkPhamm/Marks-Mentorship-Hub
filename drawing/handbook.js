// latest from the handbook: mark writes it down, the new post lands in your inbox (evergreen: the post list itself is live)
// person(cx, groundY, {pose:'rest'|'think'|'point'|'wave', look:-1|0|1, mood:'neutral'|'happy'|'unsure', s:1, to:[x,y]})
function person(cx,gy,o={}){
  const s=o.s||1, look=(o.look||0)*8*s, P=(x,y)=>[cx+x*s,gy-y*s];
  const L=(a,b,w=3.2)=>line(...P(...a),...P(...b),{strokeWidth:w*s});
  const C=(pts,w=3.2)=>curve(pts.map(p=>P(...p)),{strokeWidth:w*s});
  for(let i=0;i<9;i++)line(...P(-75+i*17,-4),...P(-63+i*17,8),{strokeWidth:1.6,roughness:0.8}); // ground hatch
  L([-14,285],[-34,20]); L([14,285],[36,20]);                                  // legs
  ell(...P(-48,12),46*s,20*s,{strokeWidth:2.6*s}); ell(...P(50,12),46*s,20*s,{strokeWidth:2.6*s}); // feet
  rect(...P(-22,500),44*s,215*s,{fill:'#fff',fillStyle:'solid',strokeWidth:3.2*s}); // torso
  L([0,500],[0,545]);                                                           // neck
  const pose=o.pose||'rest';
  if(pose==='wave'){C([[-20,488],[-75,560],[-90,640]]);ell(...P(-92,655),24*s,24*s,{strokeWidth:2.4*s});}
  else {C([[-20,488],[-50,420],[-45,330]]);ell(...P(-44,318),24*s,26*s,{strokeWidth:2.4*s});}
  if(pose==='think'){C([[20,488],[70,470],[30,566]]);ell(...P(22,578),26*s,26*s,{strokeWidth:2.4*s});}
  else if(pose==='point'){const [tx,ty]=o.to||[cx+220*s,gy-560*s];const [sx,sy]=P(20,488);
    const hx=sx+(tx-sx)*0.85,hy=sy+(ty-sy)*0.85; curve([[sx,sy],[sx+(hx-sx)*0.5,sy+(hy-sy)*0.5-12*s],[hx,hy]],{strokeWidth:3.2*s});
    ell(hx,hy,24*s,22*s,{strokeWidth:2.4*s});line(hx,hy,hx+(tx-hx)*0.6,hy+(ty-hy)*0.6,{strokeWidth:2.6*s});} // hand + marker
  else {C([[20,488],[50,420],[45,330]]);ell(...P(44,318),24*s,26*s,{strokeWidth:2.4*s});}
  ell(...P(0,630),150*s,160*s,{fill:'#fff',fillStyle:'solid',strokeWidth:3.2*s});   // head
  C([[-22,705],[-30,735],[-45,742]],2.6);C([[-5,708],[-2,745],[-15,760]],2.6);C([[12,706],[20,740],[38,748]],2.6); // hair tufts
  [-22,22].forEach(x=>ell(cx+x*s+look,gy-650*s,11*s,18*s,{fill:INK,fillStyle:'solid',strokeWidth:1.2}));
  const mood=o.mood||'neutral', my=gy-600*s;
  if(mood==='happy')curve([[cx-22*s+look,my],[cx+look,my+14*s],[cx+22*s+look,my]],{strokeWidth:2.4*s});
  else if(mood==='unsure'){curve([[cx-20*s+look,my+6*s],[cx+look,my-4*s],[cx+20*s+look,my+4*s]],{strokeWidth:2.4*s});
    line(cx-36*s+look,gy-674*s,cx-12*s+look,gy-684*s,{strokeWidth:2.2*s});line(cx+12*s+look,gy-684*s,cx+34*s+look,gy-674*s,{strokeWidth:2.2*s});}
  else line(cx-16*s+look,my,cx+16*s+look,my,{strokeWidth:2.4*s});
}
const envelope=(x,y,w,h)=>{rect(x,y,w,h);line(x,y,x+w/2,y+h*0.6,{strokeWidth:2.6});line(x+w/2,y+h*0.6,x+w,y,{strokeWidth:2.6});};
text('written down, one post at a time',800,90,54);
person(200,720,{pose:'point',look:1,mood:'happy',s:0.6,to:[415,330]});
// the open handbook
rect(420,170,420,470); rect(840,170,420,470); line(840,170,840,640,{strokeWidth:2});
text('AE Handbook',630,240,50);
['sql','dbt','pipelines','spark'].forEach((t,i)=>text(t,490,330+i*80,46,'start'));
highlight(870,205,360,80);                     // the newest page
text('new post',1050,262,50);
for(let i=0;i<5;i++) line(880,340+i*55,i===4?1100:1220,340+i*55,{strokeWidth:2});
// your inbox
envelope(1340,420,200,120);
arrow([[1235,315],[1320,330],[1420,405]],{strokeWidth:2.6,stroke:BLUE});
text('your inbox',1440,600,46);
text('mark',200,775,46);
signature();
