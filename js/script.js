// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // activate sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Scroll Up

function scrollUp() {
    const scrollup = document.getElementById("iconTop");
    if (this.scrollY >= 60) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Sections active
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener("scroll", scrollActive)
//Scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,

});
sr.reveal(`.button,.new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .footer__content`, {
    interval: 100,
});
sr.reveal(`.about__data, .discount__img,.swiper-slide`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });
