(function() {

    let ajax = new XMLHttpRequest();
    let url = 'https://viacep.com.br/ws/01310931/json/';

    console.log(ajax)

    console.log('Carregando');
    ajax.onreadystatechange = function() {

        console.log("Ajax: ", this);
        // if (this.readyState == 4 && this.status == 200) {
        //     console.log(this.responseText);
        // }  
        
        // if (this.status == 400) {
        //     console.log('erro na requisição tente mais tarde');   
        // }
    }

    ajax.open('GET', url, true);
    ajax.send();

})()