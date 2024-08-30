function areNumber(valor1, valor2) {
    if(typeof valor1 === 'number' && typeof valor2 === 'number') {
        return true;
    }
    return false;
}

var mensgemDeErro = function(codigo) {
    return `(${codigo}) Por favor, digite um nunero valido`;
}

// var mensgemDeErro = codigo => `(${codigo}) Por favor, digite um nunero valido`;

function soma(valor1, valor2 , mensagem){
    if(!areNumber(valor1, valor2)) {
        return mensagem(10);
    }
    var total = valor1 + valor2;
    return `"soma concluida": ${total}`;
}

//var result = soma('15', 10, codigo => `(${codigo}) Por favor, digite um nunero valido`);
//console.log(result);

var list = ['Ana', 'Beto', 50, 'Maria', 'Pedro', 10, 'bastos'];

var caixa = document.getElementById('lista');

for (var i = 0; i < list.length; i++) {
    if (typeof list[i] == 'number') {
        continue;
    }
    caixa.style.color = 'red'
    caixa.style.fontSize = '50px'
    caixa.innerHTML += `<div> ${list[i]} </div>`;
}