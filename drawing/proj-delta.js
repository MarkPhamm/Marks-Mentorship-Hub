// project card: Alyssa Le's Delta analysis. correlation of each factor with avg rating (economy vs non-economy)
const rows=[['value for money','0.91','0.91'],['food','0.88','0.87'],['seat comfort','0.88','0.86'],['cabin staff','0.88','0.86'],['ground service','0.88','0.83'],['wifi','0.84','0.81']];
const y0=150, rh=74, cx1=760, cx2=1010;
text('correlation with avg rating',60,70,34,'start','#666');
highlight(40,y0+4*rh-6,1120,rh-2);
text('economy',cx1,y0-20,36); text('non-economy',cx2,y0-20,36);
rows.forEach(([f,a,b],i)=>{const y=y0+i*rh;
  text(f,60,y+48,38,'start');
  rect(cx1-80,y+6,160,rh-14,{strokeWidth:2.2}); text(a,cx1,y+48,38);
  rect(cx2-80,y+6,160,rh-14,{strokeWidth:2.2}); text(b,cx2,y+48,38);});
arrow([[872,y0+6*rh+22],[880,y0+5*rh+40],[886,y0+5*rh-6]],{strokeWidth:2.4,stroke:BLUE});
text('widest gap',858,y0+6*rh+60,34,'end',BLUE);
text('mark mentorship',W-40,H-14,26,'end','#666');
