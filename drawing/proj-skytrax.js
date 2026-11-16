// project card: skytrax_reviews dbt lineage (from the repo's lineage graph), fct_review under the swipe
const node=(x,y,w,label,size=32)=>{rect(x,y,w,72);text(label,x+w/2,y+48,size);};
const go=(x1,y1,x2,y2)=>arrow([[x1,y1],[(x1+x2)/2,(y1+y2)/2+(y2>y1?-12:12)],[x2,y2]],{strokeWidth:2.2});
highlight(692,262,250,124);
node(30,288,130,'stg',40);
node(200,288,210,'int_cleaned');
node(460,120,210,'dim_airline');
node(460,288,210,'dim_date');
node(460,456,210,'dim_aircraft');
node(705,282,226,'fct_review',34);
node(960,120,215,'agg_airlines',30);
node(960,456,215,'spirit dash',30);
go(160,324,198,324);
go(410,316,458,160); go(410,324,458,324); go(410,332,458,490);
go(670,160,713,300); go(670,324,713,322); go(670,490,713,346);
go(931,300,958,160); go(931,346,958,490);
arrow([[930,600],[860,560],[820,392]],{strokeWidth:2.6,stroke:BLUE});
text('one row per review_id',940,630,34,'middle',BLUE);
text('mark mentorship',W-40,H-14,26,'end','#666');
