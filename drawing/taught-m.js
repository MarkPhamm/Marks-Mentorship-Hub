// phone cut of taught.js: the board stands tall, the chain stacked inside it
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

text('one month, no prior',550,85,58); text('data engineering',550,155,58);
const bx=290, by=210, bw=520, bh=860;
rect(bx,by,bw,bh);
text('0 to 1',bx+bw/2,by+95,70);
const cx=bx+bw/2, ys=[by+250,by+420,by+590,by+760], labels=['dbt','Airflow','GitHub','first PR'];
highlight(cx-170,ys[3]-70,340,140);
ys.forEach((y,i)=>{ell(cx,y,300,115,{strokeWidth:2.6});text(labels[i],cx,y+20,58);});
for(let i=0;i<3;i++) arrow([[cx,ys[i]+58],[cx+20,(ys[i]+ys[i+1])/2],[cx,ys[i+1]-60]],{strokeWidth:2.2});
person(140,640,{pose:'point',look:1,mood:'happy',s:0.42,to:[300,380]});
text('mark',140,700,50);
person(950,980,{pose:'think',look:-1,mood:'unsure',s:0.4});
text('data',950,1040,50); text('analyst',950,1095,50);
text('merged',950,600,50,'middle',BLUE);
arrow([[900,625],[850,760],[cx+180,ys[3]-10]],{strokeWidth:2.4,stroke:BLUE});
signature();
