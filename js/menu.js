var button = document.querySelector('[data-js-component="btn-humburger"]');
var topMenu = document.querySelector('.menu-top')
var closeMenu = document.querySelector('[data-close="close"]');

button.addEventListener('click', () => {
    topMenu.classList.remove('close');
    topMenu.classList.add('active');
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    topMenu.classList.remove('active');
    topMenu.classList.add('close');
    document.body.style.overflowY = 'scroll';
});

