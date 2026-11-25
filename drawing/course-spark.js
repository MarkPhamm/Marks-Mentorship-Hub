// course card: learn_spark — broadcast hash join: small orders copied to every executor, lineitem never shuffles
const box=(x,y,w,h,label,size=28)=>{rect(x,y,w,h,{strokeWidth:2.4});text(label,x+w/2,y+h/2+10,size);};
highlight(470,22,260,96);
box(480,30,240,80,'orders (small)',30);
text('broadcast',790,80,30,'start',BLUE);
[0,1,2].forEach(i=>{const x=120+i*340;
  rect(x,180,300,420,{strokeWidth:2.4});text('executor '+(i+1),x+150,222,28);
  box(x+30,250,240,64,'orders copy');
  box(x+30,370,240,64,'lineitem p'+(i+1));
  box(x+30,500,240,64,'join');
  arrow([[x+150,436],[x+144,468],[x+150,498]],{strokeWidth:2});
  arrow([[x+40,316],[x+5,410],[x+40,520]],{strokeWidth:2});
  arrow([[600,112],[(600+x+150)/2,150],[x+150,176]],{strokeWidth:2.2,stroke:i==1?BLUE:INK});
});
text("no shuffle",610,650,36);
text('mark mentorship',W-40,H-14,26,'end','#666');
