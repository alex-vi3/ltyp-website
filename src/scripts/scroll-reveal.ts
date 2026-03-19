let observer: IntersectionObserver | null = null;

function initScrollReveal() {
  observer?.disconnect();

  const elements = document.querySelectorAll<HTMLElement>(
    '[data-scroll-reveal]'
  );
  if (!elements.length) return;

  observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const el = entry.target as HTMLElement;
        const scrollRevealDelay = Number(el.dataset.scrollRevealDelay ?? 0);
        el.style.transitionDelay = `${scrollRevealDelay}ms`;
        el.classList.add('is-visible');
        obs.unobserve(el);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  elements.forEach((el) => {
    el.classList.add('reveal');
    observer?.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal, {
    once: true,
  });
} else {
  initScrollReveal();
}

// Important pour Astro (navigations internes)
document.addEventListener('astro:page-load', initScrollReveal);
