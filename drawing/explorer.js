// mentee projects: Tien Nguyen's Next.js explorer (Flightly), sketched from its layout. no numbers: the live data did not load
rect(30,30,1540,800);
line(430,30,428,830,{strokeWidth:2.4});
text('flightly',80,140,84,'start');
['overview','monthly metrics','route analysis','review text'].forEach((t,i)=>text(t,80,260+i*90,44,'start'));
ell(62,341,18,18,{fill:BLUE,fillStyle:'solid',stroke:BLUE});   // the page you are on
rect(480,70,1040,130);
text('flightly dashboard',1000,152,62);
rect(480,240,500,90);
text('choose airline',520,302,46,'start');
add(rc.polygon([[910,272],[950,272],[930,300]],O({fill:INK,fillStyle:'solid'})));
['reviews','avg rating','recommend'].forEach((t,i)=>{const x=480+i*350;rect(x,370,320,130);text(t,x+30,425,40,'start');curve([[x+30,470],[x+90,458],[x+150,474],[x+210,462]],{strokeWidth:2.6});});
// the chart is the point of an explorer: swipe first, ink on top
highlight(470,535,1060,280);
rect(480,545,1040,260);
text('rating over time',510,600,40,'start');
curve([[520,760],[640,700],[760,730],[880,660],[1000,690],[1120,630],[1240,670],[1360,610],[1480,640]],{strokeWidth:3});
line(520,780,1490,778,{strokeWidth:2});
text('mark mentorship',W-60,H-25,34,'end','#666');
