(function() {
    'use strict';
    const form = document.querySelector('[data-js="form-contact"]');
    const btnSubmit = document.querySelector('[data-js="btn-contact-submit"]');
    const campos = document.querySelectorAll('[data-js="valida-form"]');
    
    btnSubmit.addEventListener('click', event => {
        event.preventDefault();
        let camposEstaoPreenchidos = true;
        campos.forEach(function (element) {
            element.classList.remove('error');
            if (element.value === '') {
                camposEstaoPreenchidos = false; 
                element.classList.add('error');
            }
        });

        if (camposEstaoPreenchidos) {
            form.submit();
        }
    });
})()