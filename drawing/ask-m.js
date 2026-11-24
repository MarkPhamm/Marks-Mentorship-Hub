// phone cut of ask.js
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
// speech bubble: ellipse, a tail toward (tx,ty), centred text; fill:false keeps a violet swipe visible behind it
const bubble=(cx,cy,w,h,tx,ty,str,size,fill=true)=>{
  ell(cx,cy,w,h,fill?{fill:'#fff',fillStyle:'solid'}:{});
  const a=Math.atan2((ty-cy)/(h/2),(tx-cx)/(w/2)), sx=cx+w/2*Math.cos(a), sy=cy+h/2*Math.sin(a);
  curve([[sx,sy],[(sx+tx)/2+8,(sy+ty)/2-8],[tx,ty]],{strokeWidth:2.4});
  text(str,cx,cy+size*0.35,size);
};
text('think deeper instead of',550,80,58); text('being handed the answer',550,150,58);
person(230,760,{pose:'think',mood:'unsure',look:1,s:0.55});
person(900,1200,{pose:'rest',mood:'happy',look:-1,s:0.5});
bubble(600,290,780,150,270,405,'can you just tell me?',52);
highlight(165,840,610,82);
bubble(470,880,780,190,875,830,'what would you check first?',46,false);
text('mentee',320,740,50,'start'); text('mark',830,1190,50,'end');
signature();
