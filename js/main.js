gsap.registerPlugin(ScrollTrigger);

// Nav scroll effect — shrinks to pill on scroll
const nav = document.getElementById('mainNav');
let isScrolled = false;
window.addEventListener('scroll', () => {
  const shouldShrink = window.scrollY > 60;
  if (shouldShrink !== isScrolled) {
    isScrolled = shouldShrink;
    nav.classList.toggle('scrolled', isScrolled);
  }
}, { passive: true });

// Cursor glow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
});

// Hero entrance
const heroTl = gsap.timeline({ delay: 0.2 });
heroTl
  .to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
  .to('#heroHeadline', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
  .to('#heroSub', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
  .to('#heroActions', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');

// Set initial hero states
gsap.set(['#heroEyebrow','#heroHeadline','#heroSub','#heroActions'], { opacity: 0, y: 40 });

// Blob canvas organic shape animations
gsap.to('.blob-canvas path', {
  scale: 1.08,
  duration: 5,
  yoyo: true,
  repeat: -1,
  ease: 'sine.inOut',
  stagger: { each: 1.4, from: 'random' },
  transformOrigin: 'center center'
});

// Floating organic shapes — independent drift
gsap.to('#floatLeaf1', {
  y: -30, rotation: 6, duration: 5,
  yoyo: true, repeat: -1, ease: 'sine.inOut'
});
gsap.to('#floatBlob3', {
  y: 18, rotation: -5, x: 8, duration: 4.5,
  yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.6
});
gsap.to('#floatLeaf2', {
  y: 22, rotation: 7, duration: 4,
  yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.2
});

// Scroll reveals
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

// Service cards stagger
gsap.fromTo('.service-card',
  { opacity: 0, y: 50, scale: 0.96 },
  {
    opacity: 1, y: 0, scale: 1,
    duration: 0.7, ease: 'power3.out', stagger: 0.1,
    scrollTrigger: { trigger: '.services-grid', start: 'top 80%' }
  }
);

// Why list items
gsap.fromTo('.why-item',
  { opacity: 0, x: -30 },
  {
    opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
    scrollTrigger: { trigger: '.why-list', start: 'top 78%' }
  }
);

// Work cards stagger
gsap.fromTo('.work-card',
  { opacity: 0, y: 40, scale: 0.97 },
  {
    opacity: 1, y: 0, scale: 1,
    duration: 0.7, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.work-grid', start: 'top 80%' }
  }
);

// Manifesto lines
gsap.fromTo('.manifesto-line',
  { opacity: 0, y: 30 },
  {
    opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: '.manifesto-lines', start: 'top 80%' }
  }
);

// CTA section glow pulse
gsap.to('.cta-glow', {
  scale: 1.2, duration: 3,
  yoyo: true, repeat: -1, ease: 'sine.inOut'
});

// About cards
gsap.fromTo('.about-card.main', { opacity: 0, x: -40 }, {
  opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '.about-visual', start: 'top 80%' }
});
gsap.fromTo('.about-card.accent-card', { opacity: 0, x: 40, delay: 0.2 }, {
  opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '.about-visual', start: 'top 80%' }
});

// Why visual
gsap.fromTo('.why-visual', { opacity: 0, scale: 0.94 }, {
  opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
  scrollTrigger: { trigger: '.why-visual', start: 'top 80%' }
});
