let swiper = new Swiper(".popular-section", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


let mixer = mixitup('.all-car', {
  selectors: {
      target: '.cars'
  },
  animation: {
      duration: 300
  }
});

let carLogo = document.querySelectorAll('.car-logo');

function activeLogo() {
  carLogo.forEach(l=> l.classList.remove("active-fc"))
  this.classList.add("active-fc")
}
carLogo.forEach(l => l.addEventListener('click', activeLogo))


function scrollUp() {
	const scrollUp = document.querySelector(".scroll-up");
	if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
//ScrollReveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
})

sr.reveal(`.home-title, .popular-title, .feature-title, .footer-title `);
sr.reveal(`.home-subtitle, .home-elec, .car-option`, {delay: 450});
sr.reveal(`.home-img, .popular-section, .all-car, .footer-list`, {delay: 500});
sr.reveal(`.logos`, {delay: 500, interval: 600});
sr.reveal(`.home-info, .start-btn`, {delay: 400,interval: 100 , origin: 'bottom'})
sr.reveal(`.about-img, .map-img, .car-info`, {delay: 400 ,interval: 100 , origin: 'left'})
sr.reveal(`.about-title, .car-img`, {delay: 400 ,interval: 100 , origin: 'right'})
sr.reveal(`.card-box`, {delay: 400 ,interval: 200 , origin: 'right'})