(function() {
    'use strict';
    const form = document.querySelector('[data-js="form-contact"]');
    const btnSubmit = document.querySelector('[data-js="btn-contact-submit"]');

    btnSubmit.addEventListener('click', event => {
        event.preventDefault();

        
        

        console.dir(form); 
    });

        
    // console.dir(form);

})()