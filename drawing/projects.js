// mentee projects: the skytrax_reviews pipeline end to end, mentee dashboards under the violet swipe
const box=(x,y,w,h,label,sub,size=42)=>{rect(x,y,w,h);text(label,x+w/2,y+(sub?h/2-2:h/2+14),size);if(sub)text(sub,x+w/2,y+h/2+44,30,'middle','#666');};
const dash={strokeWidth:2,strokeLineDash:[12,14],roughness:1};
// dashboards column first, so the swipe sits under the ink
highlight(2030,350,360,590);
// stage headers
[['source',190],['extract',590],['lake',980],['load',1360],['warehouse + dbt',1780],['dashboards',2210]].forEach(([t,x])=>text(t,x,310,40,'middle','#666'));
// control plane
box(900,60,560,130,'terraform · gha · oidc','provision + deploy',46);
curve([[930,190],[890,300],[860,400]],dash);
curve([[1400,190],[1520,280],[1610,360]],dash);
// source and extract
box(40,520,300,140,'airlinequality','site closed');
box(425,420,360,120,'python scraper','beautifulsoup');
box(425,640,360,120,'python cleaner','iso dates');
arrow([[340,575],[390,520],[428,485]],{strokeWidth:2.4});
arrow([[605,540],[607,590],[605,638]],{strokeWidth:2.4});
// lake
rect(840,400,280,420);
text('S3',980,560,90); text('raw/',980,640,36); text('processed/',980,690,36); text('quality gate',980,770,32,'middle','#666');
arrow([[785,700],[815,690],[838,650]],{strokeWidth:2.4});
// load
box(1210,440,300,120,'copy into','s3 to snowflake',44);
box(1210,640,300,120,'load_audit','reconcile rows',44);
arrow([[1120,560],[1170,520],[1208,500]],{strokeWidth:2.4});
curve([[1120,680],[1170,690],[1210,700]],{strokeWidth:2.4});
// warehouse
rect(1580,360,400,480);
text('snowflake',1780,430,50);
line(1620,460,1940,458,{strokeWidth:2});
text('dbt models',1780,530,44); text('stg · int · dims · fct',1780,575,30,'middle','#666');
text('one row per review_id',1780,660,30);
text('slim ci/cd',1780,750,44); text('defer deploy',1780,795,30,'middle','#666');
arrow([[1510,500],[1545,520],[1578,560]],{strokeWidth:2.4});
curve([[1510,700],[1545,690],[1580,680]],{strokeWidth:2.4});
// dashboards
[['mode · delta',380],['mode · frontier',520],['mode · spirit',660],['next.js explorer',800]].forEach(([t,y])=>{box(2050,y,320,110,t,null,38);curve([[1980,600],[2015,(600+y+55)/2],[2050,y+55]],{strokeWidth:2});});
// airflow runs underneath
arrow([[120,1000],[600,990],[1100,1004],[1560,995]],{strokeWidth:3});
text('airflow on astronomer',840,960,44);
text('crawl · process · load · dbt',840,1060,32,'middle','#666');
// the point
arrow([[2030,985],[2080,975],[2110,948]],{strokeWidth:2.6,stroke:BLUE});
text('mentees built these',2020,1020,44,'end',BLUE);
text('mark mentorship',W-60,H-30,34,'end','#666');
