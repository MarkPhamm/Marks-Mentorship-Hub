// people i worked with, from Derek's and Aaron's quotes: asked how it works under the hood, the answer comes by monday
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
text("if he doesn't know, he will by next monday",800,80,54);
person(300,760,{pose:'think',mood:'unsure',look:1,s:0.6});
person(1300,760,{pose:'rest',mood:'happy',look:-1,s:0.6});
bubble(650,215,960,150,330,330,'how does this work under the hood?',46);
bubble(880,395,660,120,1255,390,'let me dig in this weekend',46);
// open book doodle: mark reading through the weekend
const book=(cx,cy)=>{
  curve([[cx-48,cy-10],[cx-24,cy-22],[cx,cy-10]],{strokeWidth:2.2}); curve([[cx,cy-10],[cx+24,cy-22],[cx+48,cy-10]],{strokeWidth:2.2});
  curve([[cx-48,cy+20],[cx-24,cy+8],[cx,cy+20]],{strokeWidth:2.2}); curve([[cx,cy+20],[cx+24,cy+8],[cx+48,cy+20]],{strokeWidth:2.2});
  line(cx-48,cy-10,cx-48,cy+20,{strokeWidth:2.2}); line(cx+48,cy-10,cx+48,cy+20,{strokeWidth:2.2}); line(cx,cy-10,cx,cy+20,{strokeWidth:2.2});
  [-30,-14].forEach(x=>{line(cx+x,cy-2,cx+x+12,cy-4,{strokeWidth:1.4});line(cx-x-12,cy-4,cx-x,cy-2,{strokeWidth:1.4});});
};
const days=['fri','sat','sun','mon'], dx=540, dy=570, cw=130;
highlight(dx+3*cw-8,dy-8,cw+16,166);             // the day the answer lands
days.forEach((d,i)=>{rect(dx+i*cw,dy,cw,150,{strokeWidth:2.6});text(d,dx+i*cw+cw/2,dy+55,44);});
book(dx+1.5*cw,dy+105); book(dx+2.5*cw,dy+105);
curve([[dx+cw+10,dy-12],[dx+cw+30,dy-32],[dx+2*cw-10,dy-30],[dx+2*cw,dy-48],[dx+2*cw+10,dy-30],[dx+3*cw-30,dy-32],[dx+3*cw-10,dy-12]],{strokeWidth:2.4});
text('all weekend',dx+2*cw,dy-62,44);
arrow([[dx+3*cw-60,dy+225],[dx+3*cw+20,dy+212],[dx+3*cw+cw/2,dy+165]],{strokeWidth:2.4,stroke:BLUE});
text('answer',dx+3*cw-75,dy+240,46,'end',BLUE);
text('teammate',300,815,46); text('mark',1300,815,46);
signature();
