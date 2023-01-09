let btn = document.getElementById('menu-btn');
let navBtn = document.querySelectorAll('[data-navBtn]');
let navbar = document.getElementById('navbar');
let active = 'active';
let show = 'show';

function closeMenu() {
    navbar.classList.remove(show);
}

function toggleMenu(e) {
    if (e.type === 'touchstart') {e.preventDefault()};
    navbar.classList.toggle(show);
    btn.classList.toggle(active);
    let navbarOpen = navbar.classList.contains(show);
    e.currentTarget.setAttribute('aria-expanded', navbarOpen);
    if (navbarOpen) {
        e.currentTarget.setAttribute('aria-label', 'close menu');
    } else {
        e.currentTarget.setAttribute('aria-label', 'open menu');
    }
}

btn.addEventListener('click', toggleMenu)
btn.addEventListener('touchstart', toggleMenu)

navBtn.forEach((e) => {
    e.addEventListener('click', closeMenu)
})