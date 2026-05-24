// INISIALISASI AOS ANIMATION
AOS.init({
 once: true
});

/* MENU MOBILE (HAMBURGER) */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if(menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

/* EFEK CUSTOM CURSOR GLOW */
const cursor = document.getElementById('customCursor');

if(cursor && window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}

/* AUTOMATIC TYPING EFFECT */
const txtElement = [
  'Video Editor',
  'Graphic Designer',
  'TKJ Student',
  'Web Developer'
];

let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';
let isDeleting = false;

function ngetik() {
  if(count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  if(isDeleting) {
    words = currentTxt.slice(0, --txtIndex);
  } else {
    words = currentTxt.slice(0, ++txtIndex);
  }

  const typingTarget = document.getElementById('typing');
  if(typingTarget) {
    typingTarget.textContent = words;
  }

  let speed = 100;

  if(isDeleting) {
    speed /= 2;
  }

  if(!isDeleting && words.length == currentTxt.length) {
    speed = 1500;
    isDeleting = true;
  } else if(isDeleting && words.length === 0) {
    isDeleting = false;
    count++;
    speed = 500;
  }

  setTimeout(ngetik, speed);
}

window.addEventListener('load', ngetik);

/* NAVBAR SCROLL & TOP BUTTON ACTION */
const navbar = document.getElementById('navbar');
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  if(navbar) {
    if(window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  if(topBtn) {
    if(window.scrollY > 400) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  }
});

if(topBtn) {
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* SKILL BAR SCROLL TRIGGERED ANIMATION */
const skillBars = document.querySelectorAll('.progress span');
let skillAnimated = false; // Mencegah animasi berulang-ulang saat di-scroll

function animateSkills() {
  if (skillAnimated) return;
  skillAnimated = true;

  skillBars.forEach(bar => {
    bar.style.width = bar.getAttribute('data-width');
  });

  document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;

    const update = () => {
      current += target / 30;
      if(current < target) {
        counter.textContent = Math.ceil(current) + '%';
        setTimeout(update, 25);
      } else {
        counter.textContent = target + '%';
      }
    };
    update();
  });
}

window.addEventListener('scroll', () => {
  const skillSection = document.getElementById('skills');
  if(skillSection) {
    const sectionPos = skillSection.getBoundingClientRect().top;
    if(sectionPos < window.innerHeight / 1.2) {
      animateSkills();
    }
  }
});

/* BACKGROUND PARTICLES JS */
if(document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    particles: {
      number: { value: 60 },
      color: { value: '#fb6d1b' },
      shape: { type: 'circle' },
      opacity: { value: 0.4 },
      size: { value: 2.5 },
      line_linked: {
        enable: true,
        distance: 140,
        color: '#f8eaea',
        opacity: 0.15,
        width: 1
      },
      move: { enable: true, speed: 1.5 }
    }
  });
}