// why me: the Lazard offer email recipients, with the one gmail under the violet swipe
// local parts are scribbles on purpose: no real addresses in the picture
const nx=430, ny=80, nw=1140, nh=830, y0=ny+215, step=92;
const domains=['@upenn.edu','@brown.edu','@cornell.edu','@columbia.edu','@columbia.edu','@gmail.com'];
const scribble=(x,y,w)=>curve(Array.from({length:9},(_,i)=>[x+i*w/8,y+(i%2?-12:8)]),{strokeWidth:2.6});
rect(nx,ny,nw,nh);
line(nx,ny+110,nx+nw,ny+108,{strokeWidth:2});
text('the offer email',nx+60,ny+72,48,'start');
text('to:',nx+60,y0,46,'start');
const ym=y0+5*step;
highlight(nx+170,ym-60,640,84);
domains.forEach((d,i)=>{scribble(nx+190,y0+i*step-14,200);text(d,nx+405,y0+i*step,46,'start');});
text('five .edu, one gmail',nx+nw-60,ny+nh-40,40,'end','#666');
arrow([[nx-180,ym+40],[nx-110,ym+10],[nx-30,ym-15]],{strokeWidth:2.6,stroke:BLUE});
text('mine',nx-200,ym+100,46,'middle',BLUE);
signature();
