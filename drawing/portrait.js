// about: a sketched bust under the violet swipe, pointed at by a blue "mark". not a likeness
highlight(100,90,700,760);
rect(130,120,640,700);
ell(450,370,260,300,{strokeWidth:3});
curve([[325,330],[370,250],[450,228],[530,250],[575,330]],{strokeWidth:3});   // hairline
curve([[340,300],[400,262],[460,282],[520,258],[565,300]],{strokeWidth:2.4}); // fringe
ell(400,365,20,20,{fill:INK,fillStyle:'solid'});
ell(500,365,20,20,{fill:INK,fillStyle:'solid'});
curve([[400,445],[450,470],[500,445]],{strokeWidth:2.6});                     // smile
line(420,515,418,575,{strokeWidth:2.6});
line(480,515,482,575,{strokeWidth:2.6});
curve([[190,820],[240,640],[450,585],[660,640],[710,820]],{strokeWidth:3});   // shoulders
arrow([[210,930],[260,880],[300,800]],{strokeWidth:2.6,stroke:BLUE});
text('mark',170,990,56,'middle',BLUE);
signature();
