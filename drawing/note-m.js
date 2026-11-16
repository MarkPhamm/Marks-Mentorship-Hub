// final cta, phone cut: the LinkedIn connection note, with the only-me line under the violet swipe
const nx=40, ny=40, nw=1020, nh=660;
rect(nx,ny,nw,nh);
line(nx,ny+120,nx+nw,ny+118,{strokeWidth:2});
text('add a note',nx+50,ny+80,54,'start');
text('hi Mark - i am An, junior at UEH',nx+60,ny+220,48,'start');
text('aiming: analytics engineer',nx+60,ny+315,48,'start');
highlight(nx+40,ny+345,860,84);
text('built: github.com/an-sql/metro-dbt',nx+60,ny+400,48,'start');
text('stuck: nobody reviews my models',nx+60,ny+495,48,'start');
text('not copy-pasteable = read',nx+60,ny+nh-45,42,'start','#666');
arrow([[nx+980,ny+nh+50],[nx+960,ny+560],[nx+910,ny+440]],{strokeWidth:2.6,stroke:BLUE});
text('the only-me line',nx+nw,ny+nh+110,48,'end',BLUE);
signature();
