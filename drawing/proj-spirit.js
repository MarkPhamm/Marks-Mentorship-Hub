// project card: Mia Tran's Spirit dashboard. average rating by seat type
const rows=[['first',2.103],['economy',1.577],['premium eco',1.564],['business',1.286]];
const x0=300, k=360, y0=130, rh=118;
text('avg rating by seat type',60,70,34,'start','#666');
highlight(40,y0-14,x0+2.103*k+130,rh-10);
rows.forEach(([name,v],i)=>{const y=y0+i*rh;
  text(name,x0-24,y+58,40,'end');
  rect(x0,y,v*k,80,{strokeWidth:2.4});
  text(v.toFixed(3),x0+v*k+18,y+56,38,'start');});
line(x0,y0-20,x0-2,y0+4*rh-20,{strokeWidth:2.4});
text('mark mentorship',W-40,H-14,26,'end','#666');
