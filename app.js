const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animations 
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
  duration:3,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-about', {
    ScrollTrigger: '.animate-about',
    duration: 3,
    opacity: 1,
    x: -150,
    stagger: 0.12
  });

gsap.from('.animate-skills', {
    ScrollTrigger: '.animate-skills',
    duration:3,
    opacity: 0,
    y: -150,
    stagger: 0.3
}); 

gsap.from('.animate-portofolio', {
    ScrollTrigger: '.animate-portofolio',
    duration:3,
    opacity: 1,
    x: -150,
    stagger: 0.3
});

gsap.from('.animate-contact', {
    ScrollTrigger: '.animate-contact',
    duration:3,
    opacity: 0,
    y: -150,
    stagger: 0.3
  });

const txtElement = ['Freelancer', 'web developer','Student'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ketik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ketik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ketik, 500);
})();