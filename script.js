/* ===============================
   SCROLL PROGRESS BAR
=============================== */
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = progress + '%';
});

/* ===============================
   STICKY NAVBAR
=============================== */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

/* ===============================
   MOBILE MENU  (matches your HTML classes)
=============================== */
const menu     = document.querySelector('.menu');
const menuBtn  = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.cancel-btn');

function openMenu() {
  menu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('active');
  document.body.style.overflow = '';
}

if (menuBtn)  menuBtn.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);

/* Close when a nav link is tapped */
document.querySelectorAll('.menu li a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* Close on Escape key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

/* ===============================
   ACTIVE NAV LINK ON SCROLL
=============================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop    = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* ===============================
   SCROLL REVEAL ANIMATION
=============================== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

/* ===============================
   TYPING EFFECT
=============================== */
const typingElement = document.querySelector('.typing');
const roles = [
  'Frontend Developer',
  'Web Designer',
  'Bootstrap Developer',
  'JavaScript Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

/* ===============================
   3D TILT EFFECT
=============================== */
const tiltElements = document.querySelectorAll('[data-tilt]');

tiltElements.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

/* ===============================
   ANIMATED SKILL BARS
=============================== */
const bars = document.querySelectorAll('.bar span');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const per = bar.getAttribute('data-per') || '0';
      bar.style.width = per + '%';
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

bars.forEach(bar => barObserver.observe(bar));

/* ===============================
   SCROLL TO TOP BUTTON
=============================== */
const scrollBtn = document.querySelector('.scroll-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});