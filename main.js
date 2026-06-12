/* ===== LENIS SMOOTH SCROLL ===== */
const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

/* ===== GSAP SETUP ===== */
gsap.registerPlugin(ScrollTrigger, Observer);

/* ===== SCROLL PROGRESS ===== */
const progressBar = document.getElementById('scroll-progress');
lenis.on('scroll', ({ progress }) => {
  progressBar.style.width = (progress * 100) + '%';
});

/* ===== NAVBAR ===== */
const navbar = document.getElementById('navbar');
ScrollTrigger.create({
  start: 80,
  onEnter: () => navbar.classList.add('scrolled'),
  onLeaveBack: () => navbar.classList.remove('scrolled'),
});

const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
  });
});

/* ===== CUSTOM CURSOR ===== */
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
  const dotX = gsap.quickTo(cursorDot, 'x', { duration: 0.1, ease: 'none' });
  const dotY = gsap.quickTo(cursorDot, 'y', { duration: 0.1, ease: 'none' });
  const ringX = gsap.quickTo(cursorRing, 'x', { duration: 0.35, ease: 'power2.out' });
  const ringY = gsap.quickTo(cursorRing, 'y', { duration: 0.35, ease: 'power2.out' });

  document.addEventListener('mousemove', e => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });

  document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });
}

/* ===== MAGNETIC BUTTONS ===== */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
  });
});

/* ===== HERO ENTRY ANIMATION ===== */
function initHero() {
  const tl = gsap.timeline({ delay: 0.2 });

  const line1 = document.querySelector('.hero-line-1');
  const line2 = document.querySelector('.hero-line-2');
  const subtitle = document.querySelector('.hero-subtitle');
  const ctaGroup = document.querySelector('.hero-cta-group');
  const scrollInd = document.querySelector('.scroll-indicator');

  if (line1) {
    const words1 = line1.textContent.split(' ');
    line1.innerHTML = words1.map(w => `<span class="word-wrap"><span class="word">${w}</span></span>`).join(' ');
    tl.from(line1.querySelectorAll('.word'), { yPercent: 110, opacity: 0, stagger: 0.06, duration: 0.9, ease: 'power3.out' }, 0.1);
  }
  if (line2) {
    const words2 = line2.textContent.split(' ');
    line2.innerHTML = words2.map(w => `<span class="word-wrap"><span class="word">${w}</span></span>`).join(' ');
    tl.from(line2.querySelectorAll('.word'), { yPercent: 110, opacity: 0, stagger: 0.06, duration: 0.9, ease: 'power3.out' }, 0.4);
  }
  if (subtitle) tl.from(subtitle, { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' }, 0.8);
  if (ctaGroup) tl.from(ctaGroup, { opacity: 0, y: 15, scale: 0.97, duration: 0.6, ease: 'power2.out' }, 1.0);
  if (scrollInd) tl.from(scrollInd, { opacity: 0, duration: 0.5, ease: 'power1.out' }, 1.4);
}

/* ===== HERO PARALLAX ===== */
gsap.to('.hero-bg', {
  yPercent: 30,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

/* ===== SCROLL REVEALS ===== */
function initReveals() {
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 48 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      }
    );
  });

  gsap.utils.toArray('.reveal-stagger').forEach(parent => {
    const children = parent.querySelectorAll(':scope > *');
    gsap.fromTo(children,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, stagger: 0.12, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: parent, start: 'top 85%' },
      }
    );
  });
}

/* ===== SECTION HEADING SCRAMBLE ===== */
function initScrambleHeadings() {
  document.querySelectorAll('[data-scramble]').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    const fx = new TextScramble(el);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => fx.setText(text),
    });
  });
}

/* ===== COUNTUP STATS ===== */
function initCountUp() {
  document.querySelectorAll('[data-countup]').forEach(el => {
    const target = parseFloat(el.dataset.countup);
    const suffix = el.dataset.suffix || '';
    let started = false;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (started) return;
        started = true;
        const duration = 2000;
        const startTime = performance.now();
        const isBig = target >= 1000;

        function tick(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = isBig ? current.toLocaleString('fr-FR') + suffix : current + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString('fr-FR') + suffix;
        }
        requestAnimationFrame(tick);
      },
    });
  });
}

/* ===== 3D TILT ON PROGRAMME CARDS ===== */
function initTilt() {
  document.querySelectorAll('.programme-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotationY: x * 10,
        rotationX: y * -10,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.6, ease: 'power2.out' });
    });
  });
}

/* ===== TESTIMONIALS CAROUSEL ===== */
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  const btnPrev = document.querySelector('.carousel-btn.prev');
  const btnNext = document.querySelector('.carousel-btn.next');
  if (!track) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let currentIndex = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const cardWidth = () => cards[0]?.offsetWidth + 24 || 424;

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, cards.length - 1));
    const targetScroll = currentIndex * cardWidth();
    gsap.to(track, { scrollLeft: targetScroll, duration: 0.6, ease: 'power3.out' });
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  btnNext?.addEventListener('click', () => goTo(currentIndex + 1));
  btnPrev?.addEventListener('click', () => goTo(currentIndex - 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  track.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.classList.add('grabbing');
  });
  track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('grabbing'); });
  track.addEventListener('mouseup', () => { isDown = false; track.classList.remove('grabbing'); });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  track.addEventListener('touchstart', e => { startX = e.touches[0].pageX; scrollLeft = track.scrollLeft; }, { passive: true });
  track.addEventListener('touchmove', e => {
    const x = e.touches[0].pageX;
    track.scrollLeft = scrollLeft - (x - startX) * 1.2;
  }, { passive: true });
}

/* ===== RACES TABLE SORT ===== */
function initTableSort() {
  document.querySelectorAll('.races-table th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      const table = th.closest('table');
      const col = parseInt(th.dataset.col);
      const tbody = table.querySelector('tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));
      const asc = th.dataset.dir !== 'asc';

      table.querySelectorAll('th').forEach(t => { t.classList.remove('sort-asc', 'sort-desc'); delete t.dataset.dir; });
      th.classList.add(asc ? 'sort-asc' : 'sort-desc');
      th.dataset.dir = asc ? 'asc' : 'desc';

      rows.sort((a, b) => {
        const aT = a.cells[col]?.textContent.trim() || '';
        const bT = b.cells[col]?.textContent.trim() || '';
        return asc ? aT.localeCompare(bT, 'fr') : bT.localeCompare(aT, 'fr');
      });
      rows.forEach(r => tbody.appendChild(r));
    });
  });
}

/* ===== FORM HANDLER ===== */
function initForm() {
  const form = document.getElementById('form-inscription');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const prenom = form.querySelector('[name="prenom"]').value.trim();
    const programme = form.querySelector('[name="programme"]').value;
    if (!prenom || !programme) return;
    openAvatarModal(prenom, programme);
  });

  document.querySelectorAll('[data-programme]').forEach(btn => {
    btn.addEventListener('click', () => {
      const prog = btn.dataset.programme;
      document.getElementById('rejoindre')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const select = form.querySelector('[name="programme"]');
        if (select) { select.value = prog; }
      }, 800);
    });
  });
}

/* ===== AVATAR MODAL OPEN/CLOSE ===== */
function openAvatarModal(prenom, programme) {
  const modal = document.getElementById('avatar-modal');
  const btn = document.getElementById('form-submit');
  if (!modal) return;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  let clipOrigin = '50% 50%';
  if (btn) {
    const r = btn.getBoundingClientRect();
    const cx = Math.round(r.left + r.width / 2);
    const cy = Math.round(r.top + r.height / 2);
    clipOrigin = `${cx}px ${cy}px`;
  }

  gsap.fromTo(modal,
    { clipPath: `circle(0% at ${clipOrigin})` },
    {
      clipPath: 'circle(150% at 50% 50%)',
      duration: 0.9,
      ease: 'power3.inOut',
      onComplete: () => { modal.style.clipPath = 'none'; },
    }
  );

  if (typeof initAvatarModal === 'function') initAvatarModal(prenom, programme);
}

function closeAvatarModal() {
  const modal = document.getElementById('avatar-modal');
  if (!modal) return;
  if (!confirm('Fermer le personnalisateur ? Tes choix seront perdus.')) return;

  gsap.to(modal, {
    opacity: 0, duration: 0.4, ease: 'power2.in',
    onComplete: () => {
      modal.style.display = 'none';
      modal.style.opacity = 1;
      document.body.style.overflow = '';
    },
  });
}

document.getElementById('avatar-close-btn')?.addEventListener('click', closeAvatarModal);
document.getElementById('avatar-back-btn')?.addEventListener('click', closeAvatarModal);

/* ===== TOAST ===== */
function showToast(message, duration = 4000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}
window.showToast = showToast;

/* ===== SECTION ANIMATIONS ===== */
function initSectionAnimations() {
  gsap.utils.toArray('.hyrox-feature').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.12,
        scrollTrigger: { trigger: el, start: 'top 88%' } }
    );
  });

  gsap.utils.toArray('.value-card').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 88%' } }
    );
  });

  gsap.utils.toArray('.programme-card').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: i * 0.15,
        scrollTrigger: { trigger: el, start: 'top 88%' } }
    );
  });

  gsap.utils.toArray('.testimonial-card').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.1,
        scrollTrigger: { trigger: '.carousel-track', start: 'top 85%' } }
    );
  });
}

/* ===== COACH BLOCK PARALLAX ===== */
gsap.to('.coach-photo', {
  yPercent: -8,
  ease: 'none',
  scrollTrigger: { trigger: '.coach-block', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
});

/* ===== INIT ===== */
// Scripts are loaded at end of body — DOM is already ready
(function init() {
  initHero();
  initReveals();
  initScrambleHeadings();
  initCountUp();
  initTilt();
  initCarousel();
  initTableSort();
  initForm();
  initSectionAnimations();
})();
