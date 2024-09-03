(function (){
    'use strict';
    const modal = document.querySelector('[data-modal="show"]');
    const btnContact = document.querySelectorAll('[data-btn-contact="contact"]');
    const closeModal = document.querySelector('[data-js="close-modal"]');

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show-modal');
    });

    btnContact.forEach(element => {
        element.addEventListener('click', () => {
            modal.classList.add('show-modal')
        })
    });
})()