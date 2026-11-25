// course card: learn_dbt — build the lineage, the verifier checks it (check name and 99 rows from curriculum.yaml)
const node=(x,y,w,label,size=30)=>{rect(x,y,w,72);text(label,x+w/2,y+47,size);};
const go=(x1,y,x2)=>arrow([[x1,y],[(x1+x2)/2,y-8],[x2,y]],{strokeWidth:2.2});
highlight(912,92,262,124);
node(20,110,160,'raw csv');
node(240,110,200,'stg__orders');
node(500,110,350,'int_order_payments');
node(922,110,240,'fct_orders',34);
go(180,146,238); go(440,146,498); go(850,146,920);
text('99 rows',1042,250,32);
rect(60,300,1080,270,{strokeWidth:2.6});
text('$ dbt-learn',100,365,36,'start');
text('fail',100,440,32,'start');
line(96,430,160,428,{strokeWidth:2.4});
text('fct_orders matches stg__orders count',185,440,32,'start');
text('pass',100,515,32,'start',BLUE);
text('fct_orders matches stg__orders count',185,515,32,'start',BLUE);
text('fix the model, save, it re-checks',100,630,30,'start','#444');
text('mark mentorship',W-40,H-14,26,'end','#666');
