/* ======================================= toggle icon navbar ===================================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'bx-x' class for the 'X' mark
    navbar.classList.toggle('active'); // Toggle the 'active' class for the navbar
};

/* ======================================= scroll sections active ===================================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* ======================================= sticky header ===================================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ======================================= remove toggle icon and navbar when click navbar link (scroll) ===================================== */
    menuIcon.classList.remove('bx-x'); 
    navbar.classList.remove('active'); 
};

/* ======================================= Scroll Reveal ===================================== */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Reveal from the top
ScrollReveal().reveal('.landing', { origin: 'top', distance: '100px', duration: 1500, delay: 300 }); // Configure the landing section to reveal from the top
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ======================================= typed js ===================================== */

const typed = new Typed('.multiple-text', { // Use '.multiple-text' if it's a class or '#multiple-text' if it's an ID
    strings: ['Full Stack Web Developer', 'Graphic Designer', 'Web Designer', 'Programmer' ,'Artist', ],
    typeSpeed: 100, // Fixed typo from 'typespeed' to 'typeSpeed'
    backSpeed: 100, // Fixed typo from 'backspeed' to 'backSpeed'
    backDelay: 1000,
    loop: true 
});

