// mentee projects, phone cut: what the three Mode dashboards found (KPI snapshot 2026-07-30)
const base=760, k=160, bw=170;
const bars=[['industry',2.59,'40%',195],['delta',2.49,'29%',455],['spirit',1.59,'12.1%',715],['frontier',1.43,'5.7%',975]];
highlight(975-bw/2-25,base-1.43*k-100,bw+50,1.43*k+115);
line(80,base,1080,base-2,{strokeWidth:2.6});
bars.forEach(([name,v,rec,cx])=>{
  rect(cx-bw/2,base-v*k,bw,v*k);
  text(v.toFixed(2),cx,base-v*k-26,50);
  text(name,cx,base+70,46);
  text(rec+' rec.',cx,base+122,34,'middle','#666');
});
line(90,base-2.59*k,1080,base-2.59*k,{stroke:BLUE,strokeWidth:2.4,strokeLineDash:[14,14],roughness:1});
text('industry avg',1080,base-2.59*k-80,40,'end',BLUE);
text('avg rating per carrier',80,130,42,'start','#666');
text('mark mentorship',W-60,H-40,34,'end','#666');
