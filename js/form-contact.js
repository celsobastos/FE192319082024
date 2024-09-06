(function(Validate) {
    'use strict';
    const form = document.querySelector('[data-js="form-contact"]');
    const btnSubmit = document.querySelector('[data-js="btn-contact-submit"]');
    const campos = document.querySelectorAll('[data-js="valida-form"]');
    
    btnSubmit.addEventListener('click', event => {
        event.preventDefault();
        let validacao = new Validate(['nome', 'email', 'comentario']);
        validacao.valid();
        if (validacao.test()) {
            form.submit();
        }
    });

})(Validate)