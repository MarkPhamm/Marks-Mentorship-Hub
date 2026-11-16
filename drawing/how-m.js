// how it works, phone cut: the commit timeline on top, the rising profile below it
const y=210, x0=80, x1=1020;
text('one commit a day',550,90,50);
curve([[x0,y+20],[x0+250,y-10],[x0+600,y+20],[x1,y-5]],{strokeWidth:3});
const days=[[x0+60,y+14],[x0+230,y-6],[x0+400,y+4],[x0+570,y+14],[x0+740,y+8],[x0+900,y]];
days.forEach(([cx,cy])=>{ell(cx,cy,30,30,{fill:'#111',fillStyle:'solid'});});
text('day 1',days[0][0],y+90,44);
text('day 30',days[5][0],y+90,44);
ell(days[3][0],days[3][1],90,90,{strokeWidth:2.4,stroke:BLUE});
text('spotter posts your reps to slack',550,y+170,46,'middle',BLUE);
const bx=360, bw=110, bg=40, base=800;
highlight(bx-30,470,3*(bw+bg)-bg+60,350);
rect(bx,base-130,bw,130);
rect(bx+bw+bg,base-220,bw,220);
rect(bx+2*(bw+bg),base-310,bw,310);
text('your profile',bx+(3*(bw+bg)-bg)/2,base+90,50);
arrow([[1010,y+130],[990,500],[860,620]],{strokeWidth:2.6});
signature();
