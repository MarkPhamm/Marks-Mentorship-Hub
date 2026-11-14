// 1600x1600 launch card for LinkedIn/Notes: minion row top, title middle, commit line bottom
const pw=150, ph=200, gap=50, py=180, x0=130;
for(let k=0;k<4;k++){
  const x=x0+k*(pw+gap);
  rect(x,py,pw,ph,{strokeWidth:2.6});
  ell(x+pw/2,py+52,54,54,{strokeWidth:2.2});
  line(x+28,py+112,x+pw-28,py+114,{strokeWidth:2});
  line(x+28,py+148,x+pw-28,py+146,{strokeWidth:2});
}
const dx=x0+4*(pw+gap)+70;
highlight(dx-18,py-18,pw+36,ph+36);
rect(dx,py,pw,ph,{strokeWidth:2.6});
ell(dx+pw/2,py+52,54,54,{strokeWidth:2.2});
text('only',dx+pw/2,py+130,32);
text('me',dx+pw/2,py+172,32);
text('same profile, 1000 times',x0+2*(pw+gap),py-70,48);
arrow([[dx-110,py+ph+60],[dx-50,py+ph+20],[dx-15,py+ph-15]],{strokeWidth:2.4,stroke:BLUE});
text('recruiter stops here',dx-180,py+ph+120,40,'middle',BLUE);

text('mark mentorship',800,790,96);
text('1:1 mentorship for your first data job',800,890,46);
text('markmentorship.com',800,980,52);

// commit line bottom
const y=1270, lx0=200, lx1=1400;
curve([[lx0,y+25],[lx0+350,y-10],[lx0+750,y+15],[lx1,y-5]],{strokeWidth:3});
[[lx0+100,y+15],[lx0+350,y-8],[lx0+600,y+8],[lx0+850,y+10],[lx0+1080,y-2]].forEach(([cx,cy])=>{
  ell(cx,cy,24,24,{fill:'#111',fillStyle:'solid'});
});
text('day 1',lx0+100,y+100,38);
text('day 30',lx0+1080,y+100,38);
text('one commit a day',800,y-80,44);
signature();
