// project card: Gwen Nguyen's Frontier dashboard. in-flight service score by seat type, cabin staff vs wifi
const base=560, k=150, bw=80;
const groups=[['first',2.6,1.5,230],['premium',1.9,1.1,500],['economy',1.8,1.1,770],['business',1.8,1.0,1040]];
highlight(230-bw-16,base-2.6*k-60,bw+24,2.6*k+70);
line(70,base,1160,base-2,{strokeWidth:2.4});
groups.forEach(([name,staff,wifi,cx])=>{
  rect(cx-bw-4,base-staff*k,bw,staff*k,{strokeWidth:2.4});
  text(staff.toFixed(1),cx-bw/2-4,base-staff*k-16,34);
  rect(cx+4,base-wifi*k,bw,wifi*k,{strokeWidth:2.2,fill:INK,fillStyle:'hachure',hachureGap:12,fillWeight:1.4});
  text(wifi.toFixed(1),cx+bw/2+4,base-wifi*k-16,34);
  text(name,cx,base+52,38);
});
rect(760,40,36,36,{strokeWidth:2.2}); text('cabin staff',808,70,32,'start');
rect(1010,40,36,36,{strokeWidth:2,fill:INK,fillStyle:'hachure',hachureGap:10}); text('wifi',1058,70,32,'start');
text('mark mentorship',W-40,H-14,26,'end','#666');
