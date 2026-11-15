/* Mark Mentorship: sketch layer, language toggle, mentee wall, contribution graph. No dependencies beyond rough.js. */
(function () {
  'use strict';

  var VIOLET = '#7c3aed';
  var INK = '#111';

  /* ---- sketch layer ---- */
  function drawSketches() {
    if (typeof rough === 'undefined') return;
    var els = document.querySelectorAll('[data-sketch]');
    els.forEach(function (el, i) {
      var old = el.querySelector(':scope > svg.sketch');
      if (old) old.remove();
      var w = el.offsetWidth;
      var h = el.offsetHeight;
      if (!w || !h) return;
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'sketch');
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      svg.setAttribute('aria-hidden', 'true');
      var rc = rough.svg(svg);
      var seed = i + 7; // fixed per element: no jitter on redraw
      var opts = { stroke: INK, strokeWidth: 2.2, roughness: 1.6, bowing: 1.2, seed: seed };
      var kind = el.getAttribute('data-sketch');
      try {
        if (kind === 'box') {
          svg.appendChild(rc.rectangle(3, 3, w - 6, h - 6, opts));
        } else if (kind === 'underline') {
          svg.appendChild(rc.line(0, h - 2, w, h - 4, opts));
        } else if (kind === 'circle') {
          svg.appendChild(rc.ellipse(32, 26, 36, 36, opts)); // ring around the step number
        } else if (kind === 'highlight') {
          var g = rc.rectangle(0, 2, w, h - 4, {
            stroke: 'none', fill: VIOLET, fillStyle: 'solid', roughness: 2.2, seed: seed
          });
          g.setAttribute('opacity', '0.28');
          svg.appendChild(g);
        }
      } catch (e) { return; }
      el.insertBefore(svg, el.firstChild);
      el.classList.add('sketched');
    });
  }

  var redrawTimer;
  window.addEventListener('resize', function () {
    clearTimeout(redrawTimer);
    redrawTimer = setTimeout(drawSketches, 150);
  });

  /* ---- language toggle ---- */
  var toggle = document.getElementById('lang-toggle');
  var EN = {}; // filled lazily from the DOM before the first swap to Vietnamese

  function snapshotEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in EN)) EN[key] = el.textContent;
    });
  }

  function setLang(lang) {
    snapshotEnglish();
    var dict = lang === 'vi' && typeof VI !== 'undefined' ? VI : EN;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.setAttribute('lang', lang);
    if (toggle) toggle.textContent = lang === 'vi' ? 'EN' : 'VI';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    drawSketches(); // text length changed, boxes must follow
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      // a manual choice outranks a shared ?lang= link: drop the param so reload keeps the choice
      if (new URLSearchParams(location.search).has('lang')) {
        history.replaceState(null, '', location.pathname + location.hash);
      }
      setLang(document.documentElement.getAttribute('lang') === 'vi' ? 'en' : 'vi');
    });
  }

  var startLang = 'en';
  if (new URLSearchParams(location.search).get('lang') === 'vi') {
    startLang = 'vi';
  } else {
    try { if (localStorage.getItem('lang') === 'vi') startLang = 'vi'; } catch (e) {}
  }

  /* ---- mentee wall ---- */
  function renderMentees() {
    var wall = document.getElementById('mentee-wall');
    if (!wall || typeof MENTEES === 'undefined' || !MENTEES.length) return;
    MENTEES.forEach(function (m) {
      var card = document.createElement('div');
      card.className = 'card';
      card.setAttribute('data-sketch', 'box');
      var h = document.createElement('h3');
      h.className = 'hand';
      if (m.linkedin) {
        var a = document.createElement('a');
        a.href = m.linkedin;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = m.name;
        h.appendChild(a);
      } else {
        h.textContent = m.name;
      }
      card.appendChild(h);
      if (m.role) {
        var r = document.createElement('p');
        r.className = 'aside';
        r.textContent = m.role;
        card.appendChild(r);
      }
      if (m.quote) {
        var q = document.createElement('p');
        q.textContent = '“' + m.quote + '”';
        card.appendChild(q);
      }
      wall.appendChild(card);
    });
    wall.hidden = false;
  }

  /* ---- contribution graph ---- */
  // assets/contrib.json comes from scripts/fetch-contrib.sh: one level digit (0-4) per day, oldest first
  function renderContrib(data) {
    var fig = document.getElementById('contrib');
    if (!fig || typeof rough === 'undefined') return;
    var levels = data.levels;
    var offset = new Date(data.start).getUTCDay(); // the first week starts mid-column
    var step = 22; // 18px cell + 4px gap
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + Math.ceil((offset + levels.length) / 7) * step + ' ' + 7 * step);
    svg.setAttribute('aria-hidden', 'true');
    var rc = rough.svg(svg);
    for (var i = 0; i < levels.length; i++) {
      var level = +levels[i];
      var cell = rc.rectangle(Math.floor((offset + i) / 7) * step + 2, (offset + i) % 7 * step + 2, 18, 18, level
        ? { stroke: 'none', fill: VIOLET, fillStyle: 'solid', roughness: 0.9, seed: i + 1 }
        : { stroke: INK, strokeWidth: 1, roughness: 1, seed: i + 1 });
      cell.setAttribute('opacity', level ? 0.1 + 0.225 * level : 0.3);
      svg.appendChild(cell);
    }
    var numbers = { total: data.total.toLocaleString('en-US'), active: levels.replace(/0/g, '').length };
    document.querySelectorAll('[data-contrib]').forEach(function (el) {
      el.textContent = numbers[el.getAttribute('data-contrib')];
    });
    var scroller = fig.querySelector('.contrib-scroll');
    scroller.appendChild(svg);
    fig.hidden = false;
    scroller.scrollLeft = scroller.scrollWidth; // narrow screens open on the most recent weeks
  }

  /* ---- boot ---- */
  renderMentees();
  // no file, no graph: the figure stays hidden and the stat keeps its static number
  fetch('assets/contrib.json')
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(renderContrib)
    .catch(function () {});
  if (startLang === 'vi') setLang('vi'); else snapshotEnglish();
  // fonts shift element sizes; draw after they load, with a fallback
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(drawSketches);
  }
  drawSketches();
})();
