// final cta: the LinkedIn connection note, with the only-me line under the violet swipe
const nx=430, ny=130, nw=1140, nh=640;
rect(nx,ny,nw,nh);
line(nx,ny+110,nx+nw,ny+108,{strokeWidth:2});
text('add a note',nx+60,ny+72,48,'start');
text('hi Mark - i am An, junior at UEH',nx+80,ny+210,46,'start');
text('aiming: analytics engineer',nx+80,ny+300,46,'start');
highlight(nx+60,ny+330,820,80);
text('built: github.com/an-sql/metro-dbt',nx+80,ny+385,46,'start');
text('stuck: nobody reviews my models',nx+80,ny+475,46,'start');
text('not copy-pasteable = read',nx+nw-60,ny+nh-45,40,'end','#666');
arrow([[nx-180,ny+420],[nx-110,ny+390],[nx-40,ny+380]],{strokeWidth:2.6,stroke:BLUE});
text('the only-me line',nx-190,ny+480,42,'middle',BLUE);
signature();
