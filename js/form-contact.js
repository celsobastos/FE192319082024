(function() {
    'use strict';
    const form = document.querySelector('[data-js="form-contact"]');
    const btnSubmit = document.querySelector('[data-js="btn-contact-submit"]');
    

    btnSubmit.addEventListener('click', event => {
        event.preventDefault();

        let nome = form[0].value;

        if (nome == '') {
            form[0].classList.add('error'); 
        }
        else {
            form.submit(); 
        }

        console.dir(form[0]); 
    });

        
    // console.dir(form);

})()