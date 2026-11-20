import base64, sys
from playwright.sync_api import sync_playwright

# usage: python3 make.py <name>  — renders <name>.js onto <name>.png
NAME = sys.argv[1]
SIZES = {'hero': (2000, 760), 'how': (2000, 900), 'note': (2000, 1000), 'offer': (2000, 1000), 'og': (1200, 630), 'square': (1600, 1600),
         'hero-m': (1100, 720), 'offer-m': (1100, 1000), 'note-m': (1100, 960), 'how-m': (1100, 980), 'portrait': (900, 1050),
         'projects': (2400, 1150), 'projects-m': (1100, 1930), 'findings': (2000, 1060), 'findings-m': (1100, 1000), 'explorer': (1600, 900),
         'sql-ss': (1100, 1300), 'sql-lc': (1100, 1300), 'people': (2520, 560),
         **{n: (1200, 675) for n in ['proj-skytrax', 'proj-delta', 'proj-frontier', 'proj-spirit', 'proj-local']}}
W, H = SIZES[NAME]
OUT = NAME + '.png'

rough = open('node_modules/roughjs/bundled/rough.js').read()
font = base64.b64encode(open('node_modules/@fontsource/architects-daughter/files/architects-daughter-latin-400-normal.woff2', 'rb').read()).decode()

helpers = """
const svg=document.getElementById('s'); const rc=rough.svg(svg); let seed=7;
const INK='#111', BLUE='#2f6fdb', VIOLET='#7c3aed';
const O=(o={})=>Object.assign({stroke:INK,strokeWidth:3.2,roughness:1.6,bowing:1.2,seed:seed++},o);
const add=n=>{svg.appendChild(n);return n;};
const rect=(x,y,w,h,o)=>add(rc.rectangle(x,y,w,h,O(o)));
const ell=(cx,cy,w,h,o)=>add(rc.ellipse(cx,cy,w,h,O(o)));
const line=(x1,y1,x2,y2,o)=>add(rc.line(x1,y1,x2,y2,O(o)));
const curve=(pts,o)=>add(rc.curve(pts,O(o)));
const arrow=(pts,o={})=>{curve(pts,o);const c=o.stroke||INK;const [x2,y2]=pts[pts.length-1],[x1,y1]=pts[pts.length-2];const a=Math.atan2(y2-y1,x2-x1),L=26;
  add(rc.polygon([[x2,y2],[x2-L*Math.cos(a-0.45),y2-L*Math.sin(a-0.45)],[x2-L*Math.cos(a+0.45),y2-L*Math.sin(a+0.45)]],O({stroke:c,fill:c,fillStyle:'solid'})));};
const highlight=(x,y,w,h)=>{const g=add(rc.rectangle(x,y,w,h,O({stroke:'none',fill:VIOLET,fillStyle:'solid',roughness:2.2})));g.setAttribute('opacity','0.28');return g;};
const text=(s,x,y,size,anchor='middle',color=INK)=>{const t=document.createElementNS('http://www.w3.org/2000/svg','text');
  t.setAttribute('x',x);t.setAttribute('y',y);t.setAttribute('font-size',size);t.setAttribute('text-anchor',anchor);t.setAttribute('fill',color);t.textContent=s;svg.appendChild(t);};
const signature=()=>text('mark mentorship',W-60,H-50,34,'end','#666');
"""

drawing = open(NAME + '.js').read()

html = f"""<style>@font-face{{font-family:hand;src:url(data:font/woff2;base64,{font})}}
body{{margin:0}} svg{{display:block;background:#fff}} text{{font-family:hand}}</style>
<svg id=s width={W} height={H} viewBox="0 0 {W} {H}"></svg>
<script>{rough}</script><script>const W={W},H={H};{helpers}{drawing}</script>"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': W, 'height': H})
    pg.on('pageerror', lambda e: print('JS ERROR:', e))
    pg.set_content(html)
    pg.wait_for_timeout(500)
    pg.screenshot(path=OUT)
    b.close()
print('saved', OUT)
