// how it works: a commit timeline day by day, ending in a rising chart (echoes the logo)
const y=460, x0=170, x1=1270;
curve([[x0,y+30],[x0+250,y-10],[x0+550,y+20],[x1,y-5]],{strokeWidth:3});
// commit dots along the line
const days=[[x0+70,y+18],[x0+260,y-8],[x0+430,y+5],[x0+620,y+16],[x0+800,y+4],[x0+990,y-2]];
days.forEach(([cx,cy],i)=>{ell(cx,cy,26,26,{fill:'#111',fillStyle:'solid'});});
text('day 1',days[0][0],y+95,40);
text('day 30',days[5][0],y+95,40);
text('one commit a day',x0+450,y-90,46);
// spotter calls it out
ell(days[3][0],days[3][1],80,80,{strokeWidth:2.4,stroke:BLUE});
text('spotter posts your reps to slack',days[3][0],y+180,40,'middle',BLUE);
// rising bars = the profile growing
const bx=1450, bw=90, bg=40;
highlight(bx-30,150,3*(bw+bg)+40,320);
rect(bx,360,bw,110);
rect(bx+bw+bg,290,bw,180);
rect(bx+2*(bw+bg),180,bw,290);
text('your profile',bx+(3*(bw+bg)-bg)/2,560,44);
arrow([[days[5][0]+60,y-20],[bx-80,380],[bx-20,330]],{strokeWidth:2.6});
signature();
