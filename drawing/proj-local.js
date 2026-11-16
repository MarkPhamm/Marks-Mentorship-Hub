// project card: Tony Dam's local warehouse. the star around fct_airline_reviews, from his DuckDB ERD
const node=(x,y,w,label,size=32)=>{rect(x,y,w,72);text(label,x+w/2,y+48,size);};
highlight(380,262,440,108);
node(400,280,400,'fct_airline_reviews',36);
node(60,70,240,'dim_date');
node(900,70,240,'dim_airline');
node(40,470,240,'dim_cabin');
node(920,470,240,'dim_country');
node(440,540,320,'dim_traveller_type');
[[300,106,420,280],[900,106,780,280],[280,506,420,352],[920,506,780,352],[600,540,600,352]].forEach(([x1,y1,x2,y2])=>curve([[x1,y1],[(x1+x2)/2+8,(y1+y2)/2-8],[x2,y2]],{strokeWidth:2.2}));
text('duckdb · 9 dims · 4 facts',600,190,34,'middle','#666');
text('mark mentorship',W-40,H-14,26,'end','#666');
