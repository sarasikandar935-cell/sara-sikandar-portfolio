// =========================
// MOBILE NAVIGATION
// =========================

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    const icon = menuIcon.querySelector('i');

    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});


// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');

        const icon = menuIcon.querySelector('i');

        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }

    });
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const inputs = contactForm.querySelectorAll('input[type="text"]');
    const subject = inputs[1].value;
    const message = contactForm.querySelector('textarea').value;

    const body =
        `Hello Sara,\\n\\n` +
        `Name: ${name}\\n` +
        `Email: ${email}\\n\\n` +
        `${message}`;

    const mailto =
        `mailto:sarasikandar935@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
});


// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            '0 5px 25px rgba(0, 0, 0, 0.25)';
    } else {
        header.style.boxShadow = 'none';
    }

});


// =========================
// PROJECT CARD IMAGE FALLBACK
// =========================

const projectImages = document.querySelectorAll('.project-image img');

projectImages.forEach(image => {

    image.addEventListener('error', () => {

        image.style.display = 'none';

        image.parentElement.style.background =
            'linear-gradient(135deg, #0d1b2d, #11243a)';

    });

});