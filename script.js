/* =============================== */
/* ========= SOUMYA JS =========== */
/* =============================== */

let navbar = document.querySelector('.navbar');
let loginForm = document.querySelector('.login-form');
let searchForm = document.querySelector('.search-form');
let themeBtn = document.querySelector('#theme-btn');
let header = document.querySelector('.header');
let loader = document.querySelector('.loader');

/* ================= MENU TOGGLE ================= */

document.querySelector('#menu-btn').onclick = () => {

    navbar.classList.toggle('active');

    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
};

/* ================= LOGIN TOGGLE ================= */

document.querySelector('#login-btn').onclick = () => {

    loginForm.classList.toggle('active');

    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

/* ================= SEARCH TOGGLE ================= */

let searchBtn = document.querySelector('#search-btn');

if(searchBtn){

    searchBtn.onclick = () => {

        searchForm.classList.toggle('active');

        navbar.classList.remove('active');
        loginForm.classList.remove('active');
    };
}

/* ================= CLOSE MENUS ================= */

window.addEventListener('scroll', () => {

    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
});

/* ================= THEME TOGGLE ================= */

themeBtn.onclick = () => {

    document.body.classList.toggle('active');

    if(document.body.classList.contains('active')){

        themeBtn.classList.remove('fa-moon');
        themeBtn.classList.add('fa-sun');

        localStorage.setItem('theme', 'dark');

    } else {

        themeBtn.classList.remove('fa-sun');
        themeBtn.classList.add('fa-moon');

        localStorage.setItem('theme', 'light');
    }
};

/* ================= LOAD SAVED THEME ================= */

window.addEventListener('load', () => {

    let savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'dark'){

        document.body.classList.add('active');

        themeBtn.classList.remove('fa-moon');
        themeBtn.classList.add('fa-sun');
    }
});

/* ================= HEADER SHADOW ================= */

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.classList.add('header-shadow');

    } else {

        header.classList.remove('header-shadow');
    }
});

/* ================= ACTIVE NAVBAR ================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        let sectionTop = section.offsetTop - 200;
        let sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active-link');

        if(link.getAttribute('href').includes(current)){

            link.classList.add('active-link');
        }
    });
});

/* ================= SWIPER packages ================= */
var packageSwiper = new Swiper(".packages-slider", {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 1000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".packages-slider .swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".packages-slider .swiper-button-next",
        prevEl: ".packages-slider .swiper-button-prev",
    },

    /* smooth loop fix */
    loopAdditionalSlides: 2,

    breakpoints: {

        0: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 15
        },

        768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20
        },

        1200: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 25
        }
    }
});

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'
        });
    });
});

/* ================= SWIPER REVIEW ================= */

var swiper = new Swiper(".review-slider", {

    loop: true,
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 30,

    autoplay: {

        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {

        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {

        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        },
    }
});

/* ================= SEARCH FILTER ================= */

let searchBox = document.querySelector('#searchBox');

if(searchBox){

    searchBox.addEventListener('keyup', () => {

        let filter = searchBox.value.toLowerCase();

        let cards = document.querySelectorAll('.packages .box');

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if(text.includes(filter)){

                card.style.display = 'block';

            } else {

                card.style.display = 'none';
            }
        });
    });
}

/* ================= CONTACT FORM ================= */

let contactFormElement = document.querySelector('.contact-form');

if(contactFormElement){

    contactFormElement.addEventListener('submit', (e) => {

        e.preventDefault();

        let submitBtn = contactFormElement.querySelector('.btn');

        submitBtn.value = 'Sending...';

        setTimeout(() => {

            submitBtn.value = 'Message Sent ✈️';

            alert('Your Message Has Been Sent Successfully 🚀');

            contactFormElement.reset();

        }, 1500);
    });
}

/* ================= LOGIN FORM ================= */

let loginFormElement = document.querySelector('.login-form');

if(loginFormElement){

    loginFormElement.addEventListener('submit', (e) => {

        e.preventDefault();

        alert('Login Successful 🚀');
    });
}

/* ================= COUNTER ANIMATION ================= */

let counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    let updateCounter = () => {

        let target = +counter.getAttribute('data-target');

        let c = +counter.innerText;

        let increment = target / 200;

        if(c < target){

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 10);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
});

/* ================= SCROLL TO TOP ================= */

let scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {

    if(window.scrollY > 500){

        scrollTopBtn.classList.add('show');

    } else {

        scrollTopBtn.classList.remove('show');
    }
});

if(scrollTopBtn){

    scrollTopBtn.addEventListener('click', () => {

        window.scrollTo({

            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ================= LOADER ================= */

window.addEventListener('load', () => {

    if(loader){

        loader.classList.add('fade-out');

        setTimeout(() => {

            loader.style.display = 'none';

        }, 1500);
    }
});

/* ================= TYPING EFFECT ================= */

let typingText = document.querySelector('.typing-text');

if(typingText){

    let words = [

        'Explore World',
        'Luxury Travel',
        'Adventure Trips',
        'Premium Tours',
        'Dream Vacation'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function typeEffect(){

        currentWord = words[wordIndex];

        if(isDeleting){

            typingText.textContent = currentWord.substring(0, charIndex--);

        } else {

            typingText.textContent = currentWord.substring(0, charIndex++);
        }

        if(!isDeleting && charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect, 1200);

        } else if(isDeleting && charIndex === 0){

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            setTimeout(typeEffect, 300);

        } else {

            setTimeout(typeEffect, isDeleting ? 60 : 120);
        }
    }

    typeEffect();
}

/* ================= PARALLAX EFFECT ================= */

window.addEventListener('mousemove', (e) => {

    document.querySelectorAll('.floating-card').forEach(layer => {

        let speed = layer.getAttribute('data-speed') || 5;

        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

/* ================= PACKAGE CARD TILT ================= */

let cards = document.querySelectorAll('.packages .box');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let rotateY = ((x / rect.width) - 0.5) * 12;
        let rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
        `perspective(1000px)
        rotateX(0)
        rotateY(0)
        scale(1)`;
    });
});

/* ================= CUSTOM CURSOR ================= */

let cursor = document.querySelector('.custom-cursor');

if(cursor){

    document.addEventListener('mousemove', (e) => {

        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', reveal);

function reveal(){

    revealElements.forEach(element => {

        let windowHeight = window.innerHeight;
        let revealTop = element.getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add('active');

        }
    });
}

/* ================= AOS ================= */

AOS.init({

    duration: 1000,
    delay: 100,
    once: true,
    offset: 100,
});

// /* ================= PREVENT RIGHT CLICK ================= */

// document.addEventListener('contextmenu', (e) => {

//     e.preventDefault();
// });

/* ================= PRELOADER TEXT ================= */

console.log('🌍 Soumya Travel Website Loaded Successfully 🚀');