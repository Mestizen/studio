/* ============================================================
   MESTIZEN STUDIO — Shared Scripts
   Animations, nav scroll behavior, cursor glow, partials loader.
   Requires GSAP + ScrollTrigger loaded before this file.
   ============================================================ */

// ── PARTIALS LOADER ──────────────────────────────────────────
// Injects nav and footer HTML into placeholder divs.
// Uses a path relative to the project root, resolved from this script's location.

function getBasePath() {
  // Find the path to this script, then go up one level (out of /scripts/)
  const scripts = document.querySelectorAll('script[src]');
  for (const s of scripts) {
    if (s.src.includes('main.js')) {
      return s.src.replace(/scripts\/main\.js.*$/, '');
    }
  }
  // Fallback: derive from current page location
  return window.location.href.replace(/[^/]*$/, '');
}

async function loadPartials() {
  const base = getBasePath();
  const partials = [
    { id: 'nav-partial',    file: base + 'partials/nav.html' },
    { id: 'footer-partial', file: base + 'partials/footer.html' },
  ];

  await Promise.all(partials.map(async ({ id, file }) => {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      el.innerHTML = await res.text();
    } catch (e) {
      console.warn(`Could not load partial: ${file}`, e.message);
    }
  }));

  setActiveNavLink();
  initNav();
}

// ── NAV ──────────────────────────────────────────────────────
function initNav() {
  // Scroll effect
  ScrollTrigger.create({
    start: 'top -60',
    onUpdate: (self) => {
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.toggle('scrolled', self.progress > 0);
    }
  });
}

function setActiveNavLink() {
  const path = window.location.pathname.replace('/', '') || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && path.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });
}

// ── CURSOR GLOW ──────────────────────────────────────────────
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  document.addEventListener('mousemove', e => {
    gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
  });
}

// ── SCROLL REVEALS ───────────────────────────────────────────
function initScrollReveals() {
  const reveals = document.querySelectorAll('[data-reveal]');
  reveals.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

// ── STAGGER REVEALS ──────────────────────────────────────────
// Usage: initStaggerReveal('.service-card', '.services-grid')
function initStaggerReveal(selector, triggerSelector, options = {}) {
  const defaults = {
    from: { opacity: 0, y: 50, scale: 0.96 },
    to:   { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1 },
    start: 'top 80%'
  };
  const cfg = { ...defaults, ...options };
  gsap.fromTo(selector, cfg.from, {
    ...cfg.to,
    scrollTrigger: { trigger: triggerSelector || selector, start: cfg.start }
  });
}

// ── BLOB ANIMATION ───────────────────────────────────────────
function initBlobs() {
  gsap.to('.blob', {
    scale: 1.15, duration: 4, yoyo: true, repeat: -1,
    ease: 'sine.inOut', stagger: 1.2, transformOrigin: 'center center'
  });
}

// ── FLOATING SHAPES ──────────────────────────────────────────
function initFloatingShapes() {
  if (document.getElementById('floatLeaf1')) {
    gsap.to('#floatLeaf1', { y: -25, rotation: 8, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  }
  if (document.getElementById('floatLeaf2')) {
    gsap.to('#floatLeaf2', { y: 20, rotation: -6, duration: 3.5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.8 });
  }
}

// ── CTA GLOW PULSE ───────────────────────────────────────────
function initCtaGlow() {
  const ctaGlow = document.querySelector('.cta-glow');
  if (ctaGlow) {
    gsap.to(ctaGlow, { scale: 1.2, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  }
}

// ── HERO ENTRANCE ────────────────────────────────────────────
function initHeroEntrance(selectors = ['#heroEyebrow','#heroHeadline','#heroSub','#heroActions']) {
  gsap.set(selectors, { opacity: 0, y: 40 });
  const tl = gsap.timeline({ delay: 0.2 });
  tl.to(selectors[0], { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .to(selectors[1], { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    .to(selectors[2], { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to(selectors[3], { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
}

// ── INIT ALL (call on pages that use all features) ───────────
function initShared() {
  gsap.registerPlugin(ScrollTrigger);
  initCursorGlow();
  initScrollReveals();
  initBlobs();
  initFloatingShapes();
  initCtaGlow();
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartials().then(() => {
    initShared();
  });
});
