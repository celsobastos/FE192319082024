(function(Validate, doc) {
    'use strict';
    const form = doc.querySelector('[data-js="form-contact"]');
    const btnSubmit = doc.querySelector('[data-js="btn-contact-submit"]');
    const campos = doc.querySelectorAll('[data-js="valida-form"]');
    
    btnSubmit.addEventListener('click', event => {
        event.preventDefault();
        let validacao = new Validate(['nome', 'email', 'comentario']);
        validacao.valid();
        if (validacao.test()) {

            const nome = form[0].value;
            const email = form[1].value;
            const comentario = form[2].value;

            const contatos = {nome: nome, email: email, comentario: comentario};

            const contatosJson = JSON.stringify(contatos);

            sendAjax(contatos);
        }
    });

    let aviso = doc.getElementById('aviso');

    function sendAjax(dadosDeContatos) {

        $.ajax({
            method: "POST",
            url: "http://127.0.0.1:3000/contatos",
            data: dadosDeContatos
        })
        .done(function( msg ) {
            console.log(msg);
        }); 


        // let ajax = new XMLHttpRequest();
        // let url = 'http://127.0.0.1:3000/contatos';

        // ajax.open('POST', url, true);
        // ajax.setRequestHeader('Content-Type', 'application/json');

        // aviso.innerHTML = 'Aguarde estamos salvando os dados enviados.';
        // ajax.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         aviso.innerHTML = JSON.parse(this.responseText).mensagem;
        //     }
        //     else if(this.readyState == 4 && this.status == 400) {
        //         console.log('voltou 400')
        //     }  
        // }
        // ajax.send(dadosDeContatos);
    }

    $('#cep').mask('00000-000');

})(Validate, document)