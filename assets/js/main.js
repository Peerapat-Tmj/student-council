/* =============================================
   สภานักเรียน โรงเรียนสิรินธรราชวิทยาลัย
   Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Hamburger / Mobile Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay    = document.querySelector('.mobile-overlay');

  function openMenu() {
    hamburger?.classList.add('open');
    mobileMenu?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  hamburger?.addEventListener('click', () =>
    mobileMenu?.classList.contains('open') ? closeMenu() : openMenu()
  );
  overlay?.addEventListener('click', closeMenu);

  // Mobile sub-menus
  document.querySelectorAll('.m-nav-link[data-toggle]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.toggle);
      target?.classList.toggle('open');
      const arrow = link.querySelector('.m-arrow');
      if (arrow) arrow.style.transform = target?.classList.contains('open') ? 'rotate(180deg)' : '';
    });
  });

  /* ---- Hero Slider ---- */
  const slides      = document.querySelectorAll('.slide');
  const indicators  = document.querySelectorAll('.indicator');
  let current = 0;
  let timer;

  function goTo(n) {
    slides[current]?.classList.remove('active');
    indicators[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current]?.classList.add('active');
    indicators[current]?.classList.add('active');
  }
  function startAuto() { timer = setInterval(() => goTo(current + 1), 5000); }
  function resetAuto() { clearInterval(timer); startAuto(); }

  if (slides.length) {
    goTo(0);
    startAuto();
    document.querySelector('.slider-btn.prev')?.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    document.querySelector('.slider-btn.next')?.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
    indicators.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));
  }

  /* ---- Fade-in on Scroll ---- */
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));

  /* ---- Active nav link ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPath) link.classList.add('active');
  });

  /* ---- Touch support for dropdowns (iPad/Tablet) ---- */
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.querySelectorAll('.nav-item').forEach(item => {
      const dropdown = item.querySelector('.dropdown-menu');
      if (!dropdown) return;

      const link = item.querySelector('.nav-link');
      if (!link) return;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Close other dropdowns
        document.querySelectorAll('.nav-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.querySelector('.dropdown-menu')?.style.removeProperty('opacity');
            otherItem.querySelector('.dropdown-menu')?.style.removeProperty('pointer-events');
            otherItem.querySelector('.dropdown-menu')?.style.removeProperty('transform');
          }
        });
        // Toggle current dropdown
        const isOpen = dropdown.style.opacity === '1';
        dropdown.style.opacity = isOpen ? '0' : '1';
        dropdown.style.pointerEvents = isOpen ? 'none' : 'auto';
        dropdown.style.transform = isOpen ? 'translateY(-8px)' : 'translateY(0)';
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.opacity = '0';
          menu.style.pointerEvents = 'none';
          menu.style.transform = 'translateY(-8px)';
        });
      }
    });
  }

});
