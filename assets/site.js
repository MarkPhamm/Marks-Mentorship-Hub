/* Mark Mentorship: sketch layer, language toggle, mentee wall, live data, note builder, motion. No dependencies beyond rough.js. */
(function () {
  'use strict';

  var VIOLET = '#7c3aed';
  var INK = '#111';
  var root = document.documentElement;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---- worked-with rows: copy each row once so the slide loops without a gap ---- */
  if (!reducedMotion.matches) {
    document.querySelectorAll('.marquee .track').forEach(function (track) {
      Array.prototype.slice.call(track.children).forEach(function (q) {
        var copy = q.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        copy.querySelectorAll('a').forEach(function (a) { a.tabIndex = -1; });
        track.appendChild(copy);
      });
      track.parentNode.classList.add('is-looping');
    });
  }

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

  // the hero highlight wipes in once. style.css keeps its svg clipped until .is-wiped is set, and
  // only transitions an svg that was already on the page, so later redraws show it without replaying
  function wipeHighlight() {
    var swipe = document.querySelector('.hero .swipe');
    if (!swipe || swipe.classList.contains('is-wiped')) return;
    void swipe.offsetWidth; // commit the clipped state first, or there is nothing to transition from
    swipe.classList.add('is-wiped');
  }

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
      // a manual choice outranks a shared ?lang= link: drop only that param so reload keeps the choice
      var params = new URLSearchParams(location.search);
      if (params.has('lang')) {
        params.delete('lang');
        var search = params.toString();
        history.replaceState(null, '', location.pathname + (search ? '?' + search : '') + location.hash);
      }
      var next = root.getAttribute('lang') === 'vi' ? 'en' : 'vi';
      // crossfade the swap where the browser can; the text changes length, so a hard cut jumps
      if (document.startViewTransition && !reducedMotion.matches) {
        document.startViewTransition(function () { setLang(next); });
      } else {
        setLang(next);
      }
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
    // the calendar runs a few days past a year; the caption counts the last 365 only
    var year = levels.length > 365 ? levels.slice(-365) : levels;
    var numbers = { total: data.total.toLocaleString('en-US'), active: year.replace(/0/g, '').length };
    document.querySelectorAll('[data-contrib]').forEach(function (el) {
      el.textContent = numbers[el.getAttribute('data-contrib')];
    });
    var scroller = fig.querySelector('.contrib-scroll');
    scroller.appendChild(svg);
    fig.hidden = false;
    scroller.scrollLeft = scroller.scrollWidth; // narrow screens open on the most recent weeks
  }

  /* ---- latest posts ---- */
  // assets/posts.json comes from scripts/fetch-feeds.sh: [{ title, url, date }], newest first
  function renderPosts(posts) {
    var box = document.getElementById('posts');
    if (!box) return;
    posts.forEach(function (post) {
      if (post.url.indexOf('https://') !== 0) return;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = post.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = post.title;
      var date = document.createElement('span');
      date.className = 'post-date';
      date.textContent = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
      li.appendChild(a);
      li.appendChild(date);
      box.querySelector('ul').appendChild(li);
    });
    box.hidden = false;
  }

  /* ---- note builder ---- */
  // one line per field, in the order of the drawing above it
  var NOTE_LINES = [['who', "Hi Mark - I'm "], ['aiming', 'Aiming: '], ['built', 'Built: '], ['stuck', 'Stuck: ']];
  var NOTE_FREE_LIMIT = 200; // LinkedIn: 200 characters on a free account, 300 on Premium

  function initNoteBuilder() {
    var form = document.getElementById('note-builder');
    if (!form) return;
    var out = document.getElementById('note-out');
    var copy = document.getElementById('note-copy');
    var copied = document.getElementById('note-copied');
    var meta = form.querySelector('.note-meta');
    var wasOver = false;
    function build() {
      var note = NOTE_LINES.map(function (line) {
        var value = form.elements[line[0]].value.trim();
        return value && line[1] + value;
      }).filter(Boolean).join('\n');
      var over = note.length > NOTE_FREE_LIMIT;
      out.textContent = note;
      document.getElementById('note-count').textContent = note.length;
      document.getElementById('note-over').hidden = !over;
      if (over && !wasOver) { // shake the counter line once, at the moment the note crosses the limit
        meta.classList.remove('shake');
        void meta.offsetWidth; // restart the animation if it is still on from last time
        meta.classList.add('shake');
      }
      wasOver = over;
      copy.disabled = !note;
      copied.hidden = true;
    }
    function showCopied() {
      copied.hidden = true;
      void copied.offsetWidth; // a second click replays the pop
      copied.hidden = false;
    }
    // no clipboard access (plain http, or the browser said no): select the note so it can be copied by hand
    function selectNote() {
      var range = document.createRange();
      range.selectNodeContents(out);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      try {
        if (document.execCommand('copy')) { // the old route still works in most of those cases
          selection.removeAllRanges();
          showCopied();
        }
      } catch (e) {}
    }
    function copyNote() {
      // the one conversion worth counting: a visitor who wrote a note and took it
      gtag('event', 'note_copy');
      clarity('event', 'note_copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(out.textContent).then(showCopied, selectNote);
      } else {
        selectNote();
      }
    }
    form.addEventListener('input', build);
    copy.addEventListener('click', copyNote);
    // the LinkedIn button copies a written note on the way out; the link itself still opens LinkedIn
    var go = document.getElementById('note-go');
    if (go) go.addEventListener('click', function () { if (out.textContent) copyNote(); });
    form.hidden = false;
    build();
  }

  /* ---- reveal on scroll ---- */
  // the script in <head> set .js-reveal before first paint; if it is gone, its failsafe already showed everything
  var REVEAL_DONE = 1100; // ms: the longest stagger (8 x 50) plus the 480 fade, with slack
  function initReveal() {
    if (!root.classList.contains('js-reveal')) return;
    document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.setAttribute('data-reveal', '');
        child.style.setProperty('--i', Math.min(i, 8)); // cap the stagger so a long row does not lag
      });
      group.removeAttribute('data-reveal-group');
    });
    // the observed area runs from far above the page down to 8% short of the viewport's bottom edge, so
    // an element counts once it scrolls in, and also when a reload or a jump lands below it: nothing
    // stays blank behind the reader. a hidden element never counts, and waits here until it is unhidden
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el); // once only
        el.classList.add('is-visible');
        setTimeout(function () {
          // done: drop the hooks, so the reveal's transition and delay do not leak into hover
          el.removeAttribute('data-reveal');
          el.classList.remove('is-visible');
          el.style.removeProperty('--i');
        }, REVEAL_DONE);
      });
    }, { rootMargin: '99999px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
    window.revealReady = true; // tells the failsafe in <head> to stand down
  }

  /* ---- header: scrolled line, current section ---- */
  function initHeader() {
    function onScroll() { root.classList.toggle('is-scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var nav = document.querySelector('.site-nav');
    if (!nav || !('IntersectionObserver' in window)) return;
    var links = nav.querySelectorAll('a[href^="#"]');
    function mark(id) {
      links.forEach(function (a) {
        if (a.getAttribute('href') !== '#' + id) { a.removeAttribute('aria-current'); return; }
        a.setAttribute('aria-current', 'location');
        // phones: the nav is a row that scrolls sideways, so bring the current link to its middle
        if (nav.scrollWidth > nav.clientWidth) {
          nav.scrollLeft = a.offsetLeft - nav.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2;
        }
      });
    }
    // the root is squeezed to a line 30% down the viewport: the section crossing it is the one being read.
    // sections without a nav link (the hero, the faq) clear the mark
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) mark(entry.target.id); });
    }, { rootMargin: '-30% 0px -70% 0px' });
    document.querySelectorAll('main > section').forEach(function (section) { spy.observe(section); });
  }

  /* ---- print ---- */
  // closed answers would be missing from the paper: open them for the print, close them again after
  var openedForPrint = [];
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('details:not([open])').forEach(function (d) {
      d.open = true;
      openedForPrint.push(d);
    });
  });
  window.addEventListener('afterprint', function () {
    openedForPrint.forEach(function (d) { d.open = false; });
    openedForPrint = [];
  });

  /* ---- cookie choice ---- */
  // the <head> script already applied a stored choice; this asks once and lets the footer reopen it
  function initConsent() {
    var banner = document.getElementById('consent');
    if (!banner) return;
    var choice;
    try { choice = localStorage.getItem('consent'); } catch (e) {}
    banner.hidden = choice === 'yes' || choice === 'no';
    banner.addEventListener('click', function (e) {
      var answer = e.target.getAttribute('data-consent');
      if (!answer) return;
      var a = answer === 'yes' ? 'granted' : 'denied';
      gtag('consent', 'update', { analytics_storage: a });
      clarity('consentv2', { analytics_Storage: a, ad_Storage: 'denied' });
      try { localStorage.setItem('consent', answer); } catch (e) {}
      banner.hidden = true;
    });
    document.getElementById('consent-open').addEventListener('click', function () { banner.hidden = false; });
  }

  /* ---- boot ---- */
  if (typeof rough === 'undefined') root.classList.add('no-rough'); // style.css: keep the flat highlight
  renderMentees();
  initReveal(); // after the mentee wall, so its cards are staggered too
  initHeader();
  initNoteBuilder();
  initConsent();
  // live data is optional: without a file its section stays hidden and stats keep their static numbers
  function load(file, render) {
    fetch(file)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(render)
      .catch(function () {});
  }
  load('assets/contrib.json', renderContrib);
  load('assets/posts.json', renderPosts);
  load('assets/qdbd.json', function (data) {
    // a string such as "unavailable" would render as NaN+; the refresh script rejects those, this is the backstop
    if (typeof data.last_month !== 'number' || !(data.last_month > 0)) return;
    document.getElementById('qdbd-month').textContent = (Math.floor(data.last_month / 100) * 100).toLocaleString('en-US') + '+';
  });
  if (startLang === 'vi') setLang('vi'); else snapshotEnglish();
  // fonts shift element sizes; draw after they load, with a fallback
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      drawSketches();
      wipeHighlight(); // sizes are final now, so the wipe will not be cut off by another redraw
    });
  }
  drawSketches();
  setTimeout(wipeHighlight, 1500); // fonts that never settle must not leave the highlight hidden
})();
