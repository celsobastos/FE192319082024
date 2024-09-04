(function() {
    'use strict';
    const form = document.querySelector('[data-js="form-contact"]');
    const btnSubmit = document.querySelector('[data-js="btn-contact-submit"]');
    const campos = document.querySelectorAll('[data-js="valida-form"]');
    
    const Cadastro = {}

    btnSubmit.addEventListener('click', event => {
        event.preventDefault();
        let camposEstaoPreenchidos = true;
        campos.forEach(function (element) {
            element.classList.remove('error');
            if (element.value === '') {
                camposEstaoPreenchidos = false; 
                element.classList.add('error');
            }

            let name = element.getAttribute('name');
            Cadastro[name] = element.value;
        });

        const cadastro = JSON.stringify(Cadastro);
        localStorage.setItem('cadastro', cadastro);
        
        if (camposEstaoPreenchidos) {
            form.submit();
        }
    });

    let getCadastro = JSON.parse(localStorage.getItem('cadastro'));

    form[0].value = getCadastro.nome
    form[1].value = getCadastro.email
    form[2].value = getCadastro.comentario

})()