// things i built: four free tools, one doodle each
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
// one doodle per tool, facts from the cards: k scales it, (cx, top) is its top centre
function tool(kind,cx,top,k){
  const R=(x,y,w,h)=>rect(cx+x*k,top+y*k,w*k,h*k,{strokeWidth:2.4});
  const T=(s,x,y,size)=>text(s,cx+x*k,top+y*k,size*k);
  const L=(x1,y1,x2,y2)=>line(cx+x1*k,top+y1*k,cx+x2*k,top+y2*k,{strokeWidth:2});
  const A=(x1,y1,x2,y2)=>arrow([[cx+x1*k,top+y1*k],[cx+(x1+x2)/2*k+4,top+(y1+y2)/2*k],[cx+x2*k,top+y2*k]],{strokeWidth:2});
  if(kind==='qdbd'){R(-110,20,90,60);R(20,20,90,60);R(-45,150,90,60);L(-65,80,-20,150);L(65,80,20,150);T('200+ tables',0,265,30);}
  if(kind==='cte'){R(-100,10,90,190);R(10,10,90,190);[50,90,130,170].forEach(y=>{L(-90,y,-20,y);L(20,y,90,y);});T('-',-117,105,44);T('+',117,105,44);T('both sides',0,265,30);}
  if(kind==='dbtf'){R(-60,10,120,60);T('models',0,50,30);R(-130,150,110,60);T('duckdb',-75,190,26);R(-8,150,138,60);T('snowflake',61,190,26);A(-20,72,-70,146);A(20,72,60,146);T('2 targets',0,265,30);}
  if(kind==='cicd'){R(-60,0,120,50);T('dev',0,36,32);R(-60,85,120,50);T('ci',0,121,32);R(-60,170,120,50);T('prod',0,206,32);A(0,52,0,83);A(0,137,0,168);T('9 lessons',0,265,30);}
}
// price tag on a string from (sx,sy): violet swipe drawn first, under the ink
function tag(x,y,w,h,sx,sy,size){
  highlight(x+8,y+8,w-16,h-16);
  rect(x,y,w,h); ell(x+28,y+h/2,18,18,{strokeWidth:2});
  curve([[x+28,y+h/2-9],[(x+sx)/2-20,(y+sy)/2],[sx,sy]],{strokeWidth:2});
  text('free',x+w/2+14,y+h/2+size*0.35,size);
}
const TOOLS=[['qdbd','qdbd'],['CTE Diff','cte'],['dbt-Fundamental','dbtf'],['dbt CI/CD','cicd']];
text('built, shipped, and free',800,80,54);
const x0=330, tw=270, gap=20, ty=150, th=390;
tag(720,600,240,90,760,ty+th,54);
TOOLS.forEach(([name,kind],i)=>{const x=x0+i*(tw+gap);rect(x,ty,tw,th);text(name,x+tw/2,ty+55,name.length>12?31:36);tool(kind,x+tw/2,ty+80,1);});
person(170,740,{pose:'point',look:1,mood:'happy',s:0.55,to:[325,330]});
text('mark',170,795,46);
signature();
