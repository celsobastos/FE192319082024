(function (){
    'use strict';
    const modal = document.querySelector('[data-modal="show"]');
    const btnContact = document.querySelector('[data-btn-contact="contact"]')

    btnContact.addEventListener('click', () => {
        modal.classList.add('show-modal')
    })
})()