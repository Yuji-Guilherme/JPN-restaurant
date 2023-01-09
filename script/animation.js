const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

let target = document.querySelectorAll('[data-anime]');
let animationClass = 'animate';
let logo = document.querySelector('[data-logo]');

function animeScroll() {
    let windowTop = window.pageYOffset + ((window.innerHeight*3) / 4);
    target.forEach((e) => {
        let elementDistanceTop = e.offsetTop;
        if (windowTop > elementDistanceTop) {
            e.classList.add(animationClass);
        } else {
            e.classList.remove(animationClass);
        }
    })
}

function animeLogo () {
    let windowPg = window.pageYOffset - 280;
    let alturaLogo = logo.offsetTop;
    if(windowPg > alturaLogo) {
        logo.classList.add(animationClass);
    } else {
        logo.classList.remove(animationClass);
    }
}

window.addEventListener ('scroll', debounce(() => {
    animeScroll();
    animeLogo();
}, 200))
