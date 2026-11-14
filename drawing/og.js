// social preview card, 1200x630: mini minion row on top, title middle, rule at bottom
const pw=120, ph=160, gap=40, py=70, x0=150;
for(let k=0;k<4;k++){
  const x=x0+k*(pw+gap);
  rect(x,py,pw,ph,{strokeWidth:2.4});
  ell(x+pw/2,py+42,44,44,{strokeWidth:2});
  line(x+24,py+90,x+pw-24,py+92,{strokeWidth:1.8});
  line(x+24,py+120,x+pw-24,py+118,{strokeWidth:1.8});
}
const dx=x0+4*(pw+gap)+60;
highlight(dx-14,py-14,pw+28,ph+28);
rect(dx,py,pw,ph,{strokeWidth:2.4});
ell(dx+pw/2,py+42,44,44,{strokeWidth:2});
text('only',dx+pw/2,py+105,26);
text('me',dx+pw/2,py+140,26);
arrow([[dx-90,py+ph+40],[dx-40,py+ph+10],[dx-10,py+ph-20]],{strokeWidth:2,stroke:BLUE});
text('mark mentorship',600,370,84);
text('1:1 mentorship for your first data job',600,450,40);
text('if you do what everyone else does, you will not get hired.',600,540,34,'middle','#666');
