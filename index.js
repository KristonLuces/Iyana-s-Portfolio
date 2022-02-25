//Preloader 

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})



//Typing animation
var typed = new Typed(".typing", {
    strings: ["Marketer", "Diplomat", "Translator",  "Graduate" ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
})

//Mobile Menu
const menu_btn = document.querySelector("#hamburger");
const mobile_menu = document.querySelector('.mobile-nav');
const menuItem = document.querySelectorAll('.menu-item');

menu_btn.addEventListener('click', function () {
    toggle();
});

//Toggle on item click if open
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        if(menu_btn.classList.contains('is-active')) {
           toggle();
        }
    });
});

function toggle() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

//Nav Effect 
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll Animation 
gsap.registerPlugin(ScrollTrigger);

//Scroll Animation Home

gsap.from('#home' ,{
    scrollTrigger: {
        trigger: '#home',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

//Scroll Animation About
gsap.from('.about-title' ,{
    scrollTrigger: {
        trigger: '.about-title',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.about-h' ,{
    scrollTrigger: {
        trigger: '.about-h',
        toggleActions: "restart none none none"
    },
    
    duration: 1,
    opacity: 0,
    x: 150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.about-p' ,{
    scrollTrigger: {
        trigger: '.about-p',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('#about-btn' ,{
    scrollTrigger: {
        trigger: '#about-btn',
        toggleActions: "restart none none none"
    },
    
    duration: 0.2,
    opacity: 0,
    y: 150,
    stagger: 0.2,
    delay: 0.1
});

gsap.from('.about-img' ,{
    scrollTrigger: {
        trigger: '.about-img',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

//Scroll Animation Timeline
gsap.from('.tl-title' ,{
    scrollTrigger: {
        trigger: '.tl-title',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.tl-sub' ,{
    scrollTrigger: {
        trigger: '.tl-sub',
        toggleActions: "restart none none none"
    },
    
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.tl-skill-container' , {
    scrollTrigger: {
        trigger: '.tl-skill-container',
        toggleActions: "restart none none none"
    },
    
    duration: 1,
    opacity: 0,
    x: 150,
    stagger: 0.6,
    delay: 0.8
});

//Scroll Animation Skills
gsap.from('.skill-heading' ,{
    scrollTrigger: {
        trigger: '.skill-heading',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.skill-sub' ,{
    scrollTrigger: {
        trigger: '.skill-sub',
        toggleActions: "restart none none none"
    },
    
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.skill-image' ,{
    scrollTrigger: {
        trigger: '.skill-image',
        toggleActions: "restart none none none"
    },
    
    duration: 1,
    opacity: 0,
    x: 150,
    stagger: 0.3,
    delay: 0.8
});

//Scroll Animation Footer
gsap.from('.contact-image' ,{
    scrollTrigger: {
        trigger: '.contact-image',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.contact-heading' ,{
    scrollTrigger: {
        trigger: '.contact-heading',
        toggleActions: "restart none none none"
    },
    
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.1,
    delay: 0.8
});

gsap.from('.footer-col' ,{
    scrollTrigger: {
        trigger: '.footer-col',
        toggleActions: "restart none none none"
    },

    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

