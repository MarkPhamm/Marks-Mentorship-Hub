// hero, phone cut: three identical profiles and the different one, with labels big enough at 390px
const px=40, py=170, pw=190, ph=300, gap=30;
for(let k=0;k<3;k++){
  const x=px+k*(pw+gap);
  rect(x,py,pw,ph);
  ell(x+pw/2,py+70,80,80,{strokeWidth:2.4});
  line(x+30,py+145,x+pw-30,py+145,{strokeWidth:2});
  line(x+30,py+185,x+pw-30,py+187,{strokeWidth:2});
  text('SQL',x+pw/2,py+237,38);
  text('Python',x+pw/2,py+277,38);
}
text('same profile, 1000 times',px+(3*pw+2*gap)/2,py-60,46);
const dx=px+3*(pw+gap)+50, dw=300, dy=py-20, dh=ph+40;
highlight(dx-20,dy-20,dw+40,dh+40);
rect(dx,dy,dw,dh);
ell(dx+dw/2,dy+80,90,90,{strokeWidth:2.4});
text('built a tool',dx+dw/2,dy+185,40);
text('people use',dx+dw/2,dy+235,40);
text('110k community',dx+dw/2,dy+290,36);
text('only me',dx+dw/2,dy+dh+80,50);
arrow([[dx-240,py+ph+70],[dx-130,py+ph+60],[dx-30,py+ph-10]],{strokeWidth:2.6,stroke:BLUE});
text('recruiter stops here',dx-310,py+ph+130,44,'middle',BLUE);
signature();
