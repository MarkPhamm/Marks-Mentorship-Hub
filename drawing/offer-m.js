// why me, phone cut: the offer email recipients, the one gmail under the violet swipe
// local parts are scribbles on purpose: no real addresses in the picture
const nx=50, ny=40, nw=1000, nh=880, y0=ny+235, step=100;
const domains=['@upenn.edu','@brown.edu','@cornell.edu','@columbia.edu','@columbia.edu','@gmail.com'];
const scribble=(x,y,w)=>curve(Array.from({length:9},(_,i)=>[x+i*w/8,y+(i%2?-12:8)]),{strokeWidth:2.6});
rect(nx,ny,nw,nh);
line(nx,ny+120,nx+nw,ny+118,{strokeWidth:2});
text('the offer email',nx+50,ny+80,54,'start');
text('to:',nx+50,y0,50,'start');
const ym=y0+5*step;
highlight(nx+130,ym-64,560,90);
domains.forEach((d,i)=>{scribble(nx+150,y0+i*step-16,170);text(d,nx+340,y0+i*step,52,'start');});
text('five .edu, one gmail',nx+nw-50,ny+nh-40,44,'end','#666');
arrow([[nx+880,ym-110],[nx+800,ym-80],[nx+720,ym-30]],{strokeWidth:2.6,stroke:BLUE});
text('mine',nx+880,ym-130,52,'middle',BLUE);
signature();
