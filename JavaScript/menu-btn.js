let btn = document.getElementById('menu-btn');
let navBtn = document.querySelectorAll('[data-navBtn]');
let navbar = document.getElementById('navbar');
let active = 'active';
let show = 'show';

btn.addEventListener('click', () => {
    navbar.classList.toggle(show);
    btn.classList.toggle(active);
})

navBtn.forEach((e) => {
    e.addEventListener('click', () => {
        navbar.classList.remove(show);
    })
})