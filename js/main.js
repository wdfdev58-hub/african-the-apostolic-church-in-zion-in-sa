/* African The Apostolic Church in Zion in SA — Phase 2 refine, direction: Super Travel.
   A GSAP-orchestrated hero, scroll-triggered reveals, a pinned scripture moment,
   and a floating glass nav. The rotating "free indeed" badge is pure CSS (see style.css)
   so it keeps turning even without JS. */

(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ----------------------------------------------------------------- Nav + progress */
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ----------------------------------------------------------------- GSAP */
  if (reduce || !window.gsap) {
    const intro = document.getElementById('intro');
    if (intro) intro.style.display = 'none';
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Intro: gold rule draws itself, then curtains up into the hero
  const intro = document.getElementById('intro');
  const tl = gsap.timeline();
  tl.to('.intro-line', { width: '96px', duration: 0.7, ease: 'power2.out' })
    .to('#intro', { autoAlpha: 0, duration: 0.6, ease: 'power2.inOut', onComplete: () => intro && (intro.style.display = 'none') }, '+=0.15')
    // Hero headline: rise + fade, line by line
    .from('.hero-title .line', { yPercent: 115, opacity: 0, duration: 1, ease: 'power4.out', stagger: 0.12 }, '-=0.3')
    .from('section:first-of-type .reveal', { y: 26, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }, '-=0.7');

  // Scroll reveals (skip the hero's, already handled)
  gsap.utils.toArray('.reveal').forEach((el) => {
    if (el.closest('section:first-of-type')) return;
    gsap.from(el, {
      y: 34, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 86%' },
    });
  });

  // Pinned scripture: hold, gently scale the verse in
  ScrollTrigger.create({
    trigger: '#scripture',
    start: 'top top',
    end: '+=120%',
    pin: true,
    pinSpacing: true,
  });
  gsap.fromTo('#verse',
    { scale: 0.94, opacity: 0.25 },
    { scale: 1, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: '#scripture', start: 'top 80%', end: 'top top', scrub: true } });
  gsap.to('#verseTag', {
    letterSpacing: '0.6em', ease: 'none',
    scrollTrigger: { trigger: '#scripture', start: 'top bottom', end: 'top top', scrub: true },
  });

  // Subtle parallax on the two big gradient statements
  gsap.utils.toArray('.hero-title').forEach((el) => {
    gsap.to(el, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true } });
  });
})();
