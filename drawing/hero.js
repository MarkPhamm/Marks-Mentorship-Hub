// hero: four identical minion profiles, one different profile under the violet swipe
const px=170, py=180, pw=260, ph=360, gap=70;
// four minion profiles
for(let k=0;k<4;k++){
  const x=px+k*(pw+gap);
  rect(x,py,pw,ph);
  ell(x+pw/2,py+80,90,90,{strokeWidth:2.4});                  // same face
  line(x+40,py+170,x+pw-40,py+170,{strokeWidth:2});           // same headline
  line(x+40,py+220,x+pw-40,py+222,{strokeWidth:2});
  line(x+40,py+270,x+pw-40,py+268,{strokeWidth:2});
  text('SQL · Python',x+pw/2,py+325,32);
}
text('same profile, 1000 times',px+2*(pw+gap)-gap/2,py-60,46);
// the different one
const dx=px+4*(pw+gap)+90;
highlight(dx-24,py-24,pw+48,ph+48);
rect(dx,py,pw,ph);
ell(dx+pw/2,py+80,90,90,{strokeWidth:2.4});
text('built a tool',dx+pw/2,py+185,38);
text('people use',dx+pw/2,py+235,38);
text('110k community',dx+pw/2,py+290,34);
text('only me',dx+pw/2,py+ph+70,50);
arrow([[dx-130,py+ph+30],[dx-70,py+ph+10],[dx-20,py+ph-30]],{strokeWidth:2.4,stroke:BLUE});
text('recruiter stops here',dx-200,py+ph+80,40,'middle',BLUE);
signature();
