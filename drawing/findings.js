// mentee projects: what the three Mode dashboards found (KPI snapshot 2026-07-30, skytrax_reviews README)
const base=820, k=190, bw=240;
const bars=[['industry',2.59,'40% recommend',450],['delta',2.49,'29% recommend',890],['spirit',1.59,'12.1% recommend',1330],['frontier',1.43,'5.7% recommend',1770]];
// the weakest carrier gets the swipe, under the ink
highlight(1770-bw/2-30,base-1.43*k-110,bw+60,1.43*k+130);
line(200,base,1960,base-2,{strokeWidth:2.6});
bars.forEach(([name,v,rec,cx])=>{
  rect(cx-bw/2,base-v*k,bw,v*k);
  text(v.toFixed(2),cx,base-v*k-30,58);
  text(name,cx,base+75,52);
  text(rec,cx,base+130,36,'middle','#666');
});
line(200,base-2.59*k,1960,base-2.59*k,{stroke:BLUE,strokeWidth:2.4,strokeLineDash:[14,14],roughness:1});
text('industry avg',1960,base-2.59*k-24,40,'end',BLUE);
text('avg rating per carrier',200,140,44,'start','#666');
text('mark mentorship',W-60,H-40,34,'end','#666');
