/* Recommendations from the portfolio. Same people, same words. */
var RECS = {
  "people": [
    {
      "id": "liam-fitz",
      "file": "liam_fitz.md",
      "folder": "insurify",
      "group": "peers",
      "tag": "work",
      "name": "Liam Fitz",
      "author": "Liam, Fitz",
      "role": "Operations Lead @ Datavations | Ex-Data Analyst @ Insurify",
      "quote": "Minh is an exceptional engineer and human being. His work ethic is second to none and he's a deeply curious individual. He's a great teammate, friend, and teacher. No task is too big or too small for him; he is always willing to put the team first and get the job done. I'm very grateful to have worked alongside him and believe wholeheartedly that he is a credit to any team lucky enough to have him."
    },
    {
      "id": "aaron-chen",
      "file": "aaron_chen.md",
      "folder": "insurify",
      "group": "senior",
      "tag": "work",
      "name": "Aaron Chen",
      "author": "Aaron, Chen",
      "role": "Senior Analytics Engineer @ Insurify",
      "quote": "Minh has been a stellar contributor to the Analytics team at Insurify. He excels at communicating with stakeholders and at sharing his deep analytics engineering knowledge with the team — he's genuinely versed in the mechanics of how tools like dbt, Snowflake, and Redshift work under the hood, not just how to use them. He also worked closely and effectively with the SEO team to figure out metrics that actually mattered to them. His passion for the field comes through in an unmatched work ethic, day in and day out. Any organization that values end-to-end data engineering expertise would be lucky to have Minh — he's the real deal."
    },
    {
      "id": "steven-egnaczyk",
      "file": "steven_egnaczyk.md",
      "folder": "insurify",
      "group": "peers",
      "tag": "work",
      "name": "Steven Egnaczyk",
      "author": "Steven, Egnaczyk",
      "role": "Product @ Insurify | MS in Computer Science and Engineering",
      "quote": "Me and Minh joined Insurify around 2 weeks apart and it was evidently clear from the beginning that he is a 1 of 1 individual. Incredibly curious and hard-working, Minh quickly became a prominent team member helping our core analytics team grow at Insurify. On the occasions where I worked directly with Minh on a task, he was sharp, thorough, and had refused to stop until he had enough information to fully understand and solve the problem. He has the foresight and thirst for knowledge to solve for not only the current task, but any tasks that might come after it. Minh's departure from Insurify will leave a large hole in the office not just for what he brings to the table technically, but culturally as well. Any company, manager, or team would be lucky to have Minh as an additional to their team."
    },
    {
      "id": "noah-pelberg",
      "file": "noah_pelberg.md",
      "folder": "insurify",
      "group": "peers",
      "tag": "work",
      "name": "Noah Pelberg",
      "author": "Noah, Pelberg",
      "role": "Product & Analytics @ Insurify",
      "quote": "I worked with Mark at Insurify, where he owned a large breadth and depth of marketing data models and pipelines. What sets Mark apart is that analytics engineering is not only his career, it's his passion — no one talks about it with such passion and conviction as Mark does. Amongst many great traits and skills, his best is that he is A TEAM MULTIPLIER: an expert IC who multiplies those around him, taking the time to educate and mentor his teammates, unlocking and democratizing analytics for all. If I'm starting a business tomorrow, Mark is my first analytics engineering hire."
    },
    {
      "id": "ethan-liu",
      "file": "ethan_liu.md",
      "folder": "insurify",
      "group": "junior",
      "tag": "work",
      "name": "Ethan Liu",
      "author": "Ethan, Liu",
      "role": "Data @ Insurify",
      "quote": "Mark is a huge asset to the team at Insurify and an awesome coworker — smart, hardworking, and someone who really cares about doing things well. He owns several end-to-end data pipelines that support our marketing team. He was one of the first people I met at Insurify, even before I officially joined, and I was immediately impressed by how open, welcoming, and supportive he was. As my mentor in analytics engineering, he guided me through the AE Academy and pushed me to think beyond just writing code — to really understand the data, the business context, and the reasoning behind each decision. He's also hilarious and just a great person to hang out with. Any team would be lucky to have him!"
    },
    {
      "id": "yuki-fang",
      "file": "yuki_fang.md",
      "folder": "insurify",
      "group": "junior",
      "tag": "work",
      "name": "Yuki Fang",
      "author": "Yuki, Fang",
      "role": "Data @ Insurify",
      "quote": "Mark was one of the first people I met at Insurify, and his knowledge and expertise made me assume he'd been there for years. During my rotation on the Analytics Engineering team, he took me from 0 to 1 — teaching me dbt, Airflow, and GitHub, and walking me through my first PR. As a business analyst with no prior data engineering experience, it was one of the most impactful months since I started working. What stands out most is how genuinely eager he is to support, train, and invest in new team members. I feel very lucky to have crossed paths with him at the beginning of my career journey. Any team is extremely lucky to have him!"
    },
    {
      "id": "max-brinker",
      "file": "max_brinker.md",
      "folder": "insurify",
      "group": "peers",
      "tag": "work",
      "name": "Max Brinker",
      "author": "Max, Brinker",
      "role": "Data Analyst @ Insurify",
      "quote": "I have worked closely with Mark for over a year at Insurify, where he owns the data pipelines that inform our everyday decisions on the marketing team. During this time, I've learned more technical skills from him than from everyone else combined. His exceptional command of SQL, Python, and dbt allows him to solve problems and build with efficiency. Whether it's writing a script to pull conversion data, creating a pipeline to bring a new channel's spend into our database, or making structural improvements to key business tables, Mark will coordinate across teams and make it happen. He is an exemplar of best practice with a work ethic that shows in everything he does. He has been a joy to work with and I can't recommend him highly enough."
    },
    {
      "id": "peter-manto",
      "file": "peter_manto.md",
      "folder": "insurify",
      "group": "peers",
      "tag": "work",
      "name": "Peter Manto",
      "author": "Peter, Manto",
      "role": "Business Data Analyst @ Insurify",
      "quote": "Mark is a superb analytics engineer and coworker. At Insurify, he owns a number of data pipelines, including many of the pipelines that drive key marketing channels, and is the human dictionary of our tech stack. He works hard, efficiently, and can write/review the code you need fast. Mark sets the example for learning new technologies and expanding his analytical capabilities. He is a force for progress within Insurify and his contributions have been essential to the team. I am thankful to count him as my coworker and friend."
    },
    {
      "id": "josef-cohen",
      "file": "josef_cohen.md",
      "folder": "lazard",
      "tag": "college",
      "name": "Josef Cohen",
      "author": "Josef, Cohen",
      "role": "Associate Data Engineer - Meta (Ex-Lazard)",
      "quote": "Minh's exceptional documentation skills stood out significantly. He always meticulously documented every process and project he worked on, ensuring that his contributions would continue to benefit the team long after his internship concluded. His proactive approach and willingness to go above and beyond what was expected of his position truly set him apart."
    },
    {
      "id": "kelly-slaughter",
      "file": "kelly_slaughter.md",
      "folder": "academia",
      "tag": "college",
      "name": "Kelly Slaughter",
      "author": "Kelly, Slaughter",
      "role": "BIS Program Director - Texas Christian University",
      "quote": "He would often visit me during office hours asking questions that demonstrated his commitment to extending his understanding of neural nets, boosting models, feature engineering, and more. Of course, this knowledge grows stale quickly; the point is that Minh has not only \"learned to learn\" but done so under his own initiative. I am certain he will take this work ethic and curiosity forward to his professional opportunities."
    },
    {
      "id": "tom-kinch",
      "file": "tom_kinch.md",
      "folder": "lazard",
      "tag": "college",
      "name": "Tom Kinch",
      "author": "Tom, Kinch",
      "role": "Senior Data Engineer - Lazard",
      "quote": "Hi. How are you doing?? I was out with covid last week and misses your last day in the office.I'd have to say that you were the best intern ever! Willingness to learn and more than enthusiastic to get dropped into anything we could come up with. Hell, you got code and queries into PRD. Nice work!! Hope to see you again in the spring."
    },
    {
      "id": "gary-klinger",
      "file": "gary_klinger.md",
      "folder": "academia",
      "tag": "college",
      "name": "Gary Klinger",
      "author": "Gary, Klinger",
      "role": "Python for Data Analytics Professor - Texas Christian University",
      "quote": "Minh is persistent, asks questions, knows when to stop, remembers, and can apply what is said. He only asks once. He is at the top of my class. His maturity level is advanced for his age compared to peers. He will code up more than one solution for insight even though the effort is not tied to his grade."
    },
    {
      "id": "luo-hubert",
      "file": "luo_hubert.md",
      "folder": "lazard",
      "tag": "college",
      "name": "Luo Hubert",
      "author": "Luo, Hubert",
      "role": "Data Analytic Vice President - Lazard",
      "quote": "Hey Mark, you did a great job overall! The work linking the models to Snowflake and PowerBI are both big improvements in the overall process. The presentation to Joe also went well and I appreciated the preperation and work you put in for that!"
    },
    {
      "id": "mia-tran",
      "file": "mia_tran.md",
      "folder": "mentees",
      "tag": "mentee",
      "name": "Mia Tran",
      "author": "Mia, Tran",
      "role": "GHC '25 | SDS, Quant Econ @ Smith College",
      "quote": "I'm incredibly grateful to have had the opportunity to learn from Minh. He's one of the people whose passion for data is truly genuine and inspiring — whether he's writing thoughtful data blogs on Substack, sharing and discussing ideas, or asking questions simply to deepen his understanding, he's constantly learning and refining his craft. His curiosity is contagious. What I appreciate most is the way he mentors: he genuinely believes in his students and encourages us to think deeper instead of simply giving us the answers. He challenges us to be curious, ask better questions, and grow into more confident data professionals. His support and belief in my potential have meant more than he probably realizes. I couldn't recommend him more highly."
    },
    {
      "id": "gwen-nguyen",
      "file": "gwen_nguyen.md",
      "folder": "mentees",
      "tag": "mentee",
      "name": "Gwen Nguyen",
      "author": "Gwen, Nguyen",
      "role": "Cloud & Data Engineer Intern @ Arch Insurance",
      "quote": "Mark is the kind of mentor that will push you forward and is very critical of your work — he will not let you look back on failures without lessons attached. At the end of the day, your notes will be full of cool and irreplaceable insights: interview tips, business contexts, and technical updates. He never runs out of cool things to teach you. I believe working with Mark is the fastest way to level up your skills in a corporate setting, even if you've never experienced one."
    },
    {
      "id": "derek-le",
      "file": "derek_le.md",
      "folder": "insurify",
      "group": "junior",
      "tag": "work",
      "name": "Derek Le",
      "author": "Derek, Le",
      "role": "Data @ Insurify | Data Science @ TCU",
      "quote": "Mark owns numerous pipelines and alert systems that were proven to improve efficiency across all sites at Insurify. As a coworker, he is credited for his speed and scalability mindset. He is good at what he knows — if he doesn't know, he will by next Monday. Mark will achieve the greatness that is destined for the hard work he has put in. Glad to work and have him as a coworker and a friend."
    },
    {
      "id": "vu-trinh",
      "file": "vu_trinh.md",
      "folder": "mentors",
      "tag": "mentor",
      "name": "Vu Trinh",
      "author": "Vu, Trinh",
      "role": "Data Engineer · vutr.substack.com",
      "quote": "Minh reached out to me on LinkedIn some time ago to ask about my experience in data engineering, and since then we've exchanged a lot of ideas and knowledge in the field. He is also a technical writer for my newsletter, vutr, and is responsible for the dbt-cli project, a CLI application that lets users learn dbt right on their laptops. What impresses me most about Minh is that he is one of the most proactive, enthusiastic, and dedicated people I have ever met — he doesn't stop until a concept truly clicks, and he can spend an entire weekend working on a task he has committed to. With this kind of spirit, I wouldn't be surprised if he achieves even greater success in the future. Although he sees me as his mentor, there are actually many things I have learned — and continue to learn — from him."
    },
    {
      "id": "tu-nguyen",
      "file": "tu_nguyen.md",
      "folder": "mentors",
      "tag": "mentor",
      "name": "Tu Nguyen",
      "author": "Tu, Nguyen",
      "role": "Senior Analytics Engineer @ GPBank",
      "quote": "I highly recommend Minh based on our time working together at Xóm Data. Minh is a skilled professional who consistently demonstrates a deep understanding of data and a strong analytical mindset. He is a natural problem-solver who tackles complex challenges with precision and attention to detail. Minh's technical abilities and collaborative spirit make him a fantastic asset to any data-driven team."
    }
  ],
  "themes": [
    {
      "label": "Mentorship & teaching",
      "blurb": "Educates and levels up everyone around him",
      "authors": [
        "Aaron, Chen",
        "Noah, Pelberg",
        "Ethan, Liu",
        "Yuki, Fang",
        "Max, Brinker",
        "Mia, Tran",
        "Gwen, Nguyen"
      ]
    },
    {
      "label": "Owns pipelines end-to-end",
      "blurb": "Trusted with the data models decisions run on",
      "authors": [
        "Aaron, Chen",
        "Noah, Pelberg",
        "Ethan, Liu",
        "Max, Brinker",
        "Peter, Manto",
        "Derek, Le"
      ]
    },
    {
      "label": "Deep technical expertise",
      "blurb": "SQL, Python, dbt — the team's human dictionary",
      "authors": [
        "Aaron, Chen",
        "Max, Brinker",
        "Peter, Manto",
        "Yuki, Fang",
        "Luo, Hubert",
        "Tom, Kinch",
        "Tu, Nguyen"
      ]
    },
    {
      "label": "Passion & fast learning",
      "blurb": "Genuine drive; learns anything by next Monday",
      "authors": [
        "Aaron, Chen",
        "Noah, Pelberg",
        "Kelly, Slaughter",
        "Gary, Klinger",
        "Mia, Tran",
        "Josef, Cohen",
        "Derek, Le",
        "Vu, Trinh"
      ]
    },
    {
      "label": "Team multiplier",
      "blurb": "Coordinates across teams and lifts everyone's output",
      "authors": [
        "Aaron, Chen",
        "Noah, Pelberg",
        "Max, Brinker",
        "Peter, Manto",
        "Derek, Le"
      ]
    },
    {
      "label": "Goes above & beyond",
      "blurb": "Does more than the role asks — every time",
      "authors": [
        "Aaron, Chen",
        "Josef, Cohen",
        "Tom, Kinch",
        "Gary, Klinger",
        "Luo, Hubert",
        "Vu, Trinh"
      ]
    },
    {
      "label": "Speed & efficiency",
      "blurb": "Ships fast with a scalability mindset",
      "authors": [
        "Derek, Le",
        "Max, Brinker",
        "Peter, Manto"
      ]
    },
    {
      "label": "Docs & best practices",
      "blurb": "Meticulous documentation that outlives the project",
      "authors": [
        "Josef, Cohen",
        "Max, Brinker",
        "Luo, Hubert"
      ]
    }
  ]
};

var REC_COLORS = { insurify: '#c2410c', lazard: '#0369a1', academia: '#b45309', mentees: '#047857', mentors: '#be123c' };

function initRecs() {
  var root = document.getElementById('rec-ide');
  var themesEl = document.getElementById('rec-themes');
  if (!root || !themesEl || typeof RECS === 'undefined') return;

  var people = RECS.people;
  var byAuthor = {};
  var byId = {};
  people.forEach(function (p) { byAuthor[p.author] = p; byId[p.id] = p; });

  var open = ['mia-tran'];
  var active = 'mia-tran';
  var collapsed = {};
  var cycle = {};
  var themeButtons = [];
  var tree = document.getElementById('rec-tree');
  var tabs = document.getElementById('rec-tabs');
  var editor = document.getElementById('rec-editor');
  var meta = document.getElementById('rec-meta');

  RECS.themes.forEach(function (theme, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rec-theme';
    btn.setAttribute('data-sketch', 'box');
    var title = document.createElement('span');
    title.className = 'hand';
    title.textContent = theme.label;
    var blurb = document.createElement('p');
    blurb.textContent = theme.blurb;
    var faces = document.createElement('span');
    faces.className = 'rec-faces';
    theme.authors.forEach(function (author) {
      var person = byAuthor[author];
      if (!person) return;
      var img = document.createElement('img');
      img.src = 'assets/img/people/stick-' + (people.indexOf(person) % 6) + '.png';
      img.alt = '';
      img.width = 36;
      img.height = 48;
      faces.appendChild(img);
    });
    btn.appendChild(title);
    btn.appendChild(blurb);
    btn.appendChild(faces);
    btn.addEventListener('click', function () {
      var n = theme.authors.length;
      var at = (cycle[theme.label] || 0) % n;
      cycle[theme.label] = at + 1;
      openFile(byAuthor[theme.authors[at]]);
    });
    themesEl.appendChild(btn);
    themeButtons[i] = btn;
  });

  document.getElementById('rec-files').addEventListener('click', function () {
    var on = root.classList.toggle('is-files');
    this.setAttribute('aria-expanded', on ? 'true' : 'false');
  });

  function openFile(person) {
    if (!person) return;
    if (open.indexOf(person.id) < 0) open.push(person.id);
    active = person.id;
    root.classList.remove('is-files');
    document.getElementById('rec-files').setAttribute('aria-expanded', 'false');
    render();
    editor.scrollTop = 0;
  }

  function folderButton(name, count, depth, key) {
    var isOpen = !collapsed[key];
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rec-folder';
    btn.style.paddingLeft = (10 + depth * 14) + 'px';
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.appendChild(document.createTextNode((isOpen ? '– ' : '+ ') + name));
    var n = document.createElement('span');
    n.className = 'rec-count';
    n.textContent = String(count);
    btn.appendChild(n);
    btn.addEventListener('click', function () {
      collapsed[key] = !collapsed[key];
      renderTree();
    });
    tree.appendChild(btn);
    return isOpen;
  }

  function fileButton(person, depth) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rec-file' + (person.id === active ? ' is-on' : '');
    btn.style.paddingLeft = (24 + depth * 14) + 'px';
    btn.style.color = person.id === active ? '' : REC_COLORS[person.folder];
    btn.textContent = person.file;
    btn.addEventListener('click', function () { openFile(person); });
    tree.appendChild(btn);
  }

  function renderTree() {
    var top = tree.scrollTop;
    tree.textContent = '';
    var kicker = document.createElement('p');
    kicker.className = 'rec-kicker';
    kicker.textContent = 'recommendations';
    tree.appendChild(kicker);
    var insurify = people.filter(function (p) { return p.folder === 'insurify'; });
    if (folderButton('insurify', insurify.length, 0, 'insurify')) {
      ['senior', 'peers', 'junior'].forEach(function (group) {
        var files = people.filter(function (p) { return p.group === group; });
        if (folderButton(group, files.length, 1, 'insurify/' + group)) {
          files.forEach(function (p) { fileButton(p, 2); });
        }
      });
    }
    ['lazard', 'academia', 'mentees', 'mentors'].forEach(function (folder) {
      var files = people.filter(function (p) { return p.folder === folder; });
      if (folderButton(folder, files.length, 0, folder)) {
        files.forEach(function (p) { fileButton(p, 1); });
      }
    });
    tree.scrollTop = top;
  }

  function renderTabs() {
    tabs.textContent = '';
    open.forEach(function (id) {
      var person = byId[id];
      var tab = document.createElement('div');
      tab.className = 'rec-tab' + (id === active ? ' is-on' : '');
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', id === active ? 'true' : 'false');
      var name = document.createElement('button');
      name.type = 'button';
      name.className = 'rec-tab-name';
      name.style.color = REC_COLORS[person.folder];
      name.textContent = person.file;
      name.addEventListener('click', function () { active = id; render(); editor.scrollTop = 0; });
      var close = document.createElement('button');
      close.type = 'button';
      close.className = 'rec-tab-x';
      close.textContent = '×';
      close.setAttribute('aria-label', 'Close ' + person.file);
      close.addEventListener('click', function () {
        var i = open.indexOf(id);
        open.splice(i, 1);
        if (active === id) active = open[i] || open[i - 1] || null;
        render();
      });
      tab.appendChild(name);
      tab.appendChild(close);
      tabs.appendChild(tab);
    });
  }

  function line(n, node, quote) {
    var row = document.createElement('div');
    row.className = 'rec-line' + (quote ? ' is-quote' : '');
    var num = document.createElement('span');
    num.className = 'rec-ln';
    num.textContent = String(n);
    var code = document.createElement('span');
    code.className = 'rec-code';
    code.appendChild(node);
    row.appendChild(num);
    row.appendChild(code);
    editor.appendChild(row);
  }

  function text(value, cls) {
    var span = document.createElement('span');
    if (cls) span.className = cls;
    span.textContent = value;
    return span;
  }

  function renderEditor() {
    editor.textContent = '';
    var person = byId[active];
    if (!person) {
      meta.textContent = '';
      line(1, text('Open a file.', 'rec-muted'), false);
      return;
    }
    var sentences = person.quote.match(/[^.!?]+[.!?]*/g) || [person.quote];
    var n = 1;
    line(n++, text('---', 'rec-muted'), false);
    var author = document.createElement('span');
    author.appendChild(text('author', 'rec-key'));
    author.appendChild(text(': "' + person.name + '"'));
    line(n++, author, false);
    var role = document.createElement('span');
    role.appendChild(text('role', 'rec-key'));
    role.appendChild(text(': "' + person.role + '"', 'rec-muted'));
    line(n++, role, false);
    var tags = document.createElement('span');
    tags.appendChild(text('tags', 'rec-key'));
    tags.appendChild(text(': [' + person.tag + ', '));
    var folder = text(person.folder);
    folder.style.color = REC_COLORS[person.folder];
    tags.appendChild(folder);
    tags.appendChild(text(']'));
    line(n++, tags, false);
    line(n++, text('---', 'rec-muted'), false);
    line(n++, text(' '), false);
    sentences.forEach(function (sentence, i) {
      var quote = document.createElement('span');
      quote.appendChild(text('> ', 'rec-muted'));
      quote.appendChild(text(sentence.trim()));
      line(n++, quote, i === 0);
    });
    meta.textContent = 'Ln ' + (n - 1) + '  ·  Markdown';
  }

  function markThemes() {
    var person = byId[active];
    themeButtons.forEach(function (btn, i) {
      var on = person && RECS.themes[i].authors.indexOf(person.author) !== -1;
      btn.classList.toggle('is-on', !!on);
    });
  }

  function render() {
    renderTree();
    renderTabs();
    renderEditor();
    markThemes();
  }

  render();
}
