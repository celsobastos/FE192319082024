var button = document.querySelector('[data-js-component="btn-humburger"]');
var topMenu = document.querySelector('.menu-top')
var closeMenu = document.querySelector('[data-close="close"]');

button.addEventListener('click', () => {
    topMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    topMenu.classList.toggle('active');
});
