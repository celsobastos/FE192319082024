(function(doc, Validate) {

    const validate = new Validate(['cep']);

    const form = doc.getElementById('form-cadastro');
    const cep = doc.getElementById('cep');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validate.valid();
        if (validate.test()) {
            form.submit();
        }
    })

    cep.addEventListener('keydown', function(event) {
        if (event.code === 'Enter' && validate.isValidCep(cep.value)) {
            event.preventDefault();
            sendAjax(cep.value);
        }
    });

    function sendAjax(cep) {
        let ajax = new XMLHttpRequest();
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const parse = JSON.parse(this.responseText);
                form[1].value = parse.logradouro;
                form[2].value = parse.localidade;
                form[3].value = parse.bairro;
            }
            else if(this.readyState == 4 && this.status == 400) {
                console.log('voltou 4000')
            }  
        }
        ajax.open('GET', url, true);
        ajax.send();
    }

    function sendFormAjax() {
        let ajax = new XMLHttpRequest();
        let url = `http://127.0.0.1:5500/cadastro`;
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const parse = JSON.parse(this.responseText);
                form[1].value = parse.logradouro;
                form[2].value = parse.localidade;
                form[3].value = parse.bairro;
            }
            else if(this.readyState == 4 && this.status == 400) {
                console.log('voltou 4000')
            }  
        }
        ajax.open('POST', url, true);
        ajax.send();
    }

})(document, Validate)

