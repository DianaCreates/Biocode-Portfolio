let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

const skillsSwiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 40,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    }
  }
});

/*
// Optional: Parallax scroll
document.addEventListener('scroll', function() {
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(element => {
    const speed = element.getAttribute('data-speed');
    const offset = window.scrollY * (speed * 0.0); 
    element.style.transform = `translateY(${offset}px)`;
  });
});
*/
