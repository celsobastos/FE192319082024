<<<<<<< Updated upstream:js/services.js
var Pessoa = {
    nome: 'Celso',
    sexo: true, 
    cursos: ['ingles', 'portugues', 'Espanhol'],
    boletim: {
        matematica: [10, 5, 2, {faltas: 40}],
        portugues : {
            pbim: 10,
            sbim: 2,
        }
    },
    pegaDados() {
        return `${this.nome}, ${this.idade}`
    },
    pegaMatematica() {
        return this.boletim.matematica;
    },
}

/* Wrapper */
var nome = 'Matheus';
var list = [5, 50, 46]

Pessoa.nome = 'Carlos'
Pessoa.corOlhos = 'green'
// console.log(Pessoa.corOlhos);
function dataPessoa(pessoa) {
    // console.log(pessoa.boletim);
}

var doc = document;
// var reparos = doc.getElementById('reparos');
var reparos = doc.querySelectorAll('.servicos-item');
reparos.forEach(item => {
    item.addEventListener('click', event => {
        // console.log('mouse passor por aqui...');
        event.target.classList.toggle('format')
        
        var test = event.target.parentNode.parentNode.lastElementChild.lastElementChild;
        test.classList.remove('format')
    });
});





// var listClass = reparos[0].classList;
// listClass.add('format');
// console.dir(reparos[0].classList)



// var lista = ['Pedro', 'Paulo', 'João'];
// lista.forEach(item => {
//     console.log(item)
// });
// for (var i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
// }



=======
var Pessoa = {
    nome: 'Celso',
    sexo: true, 
    cursos: ['ingles', 'portugues', 'Espanhol'],
    boletim: {
        matematica: [10, 5, 2, {faltas: 40}],
        portugues : {
            pbim: 10,
            sbim: 2,
        }
    },
    pegaDados() {
        return `${this.nome}, ${this.idade}`
    },
    pegaMatematica() {
        return this.boletim.matematica;
    },
}

/* Wrapper */
// var nome = 'Matheus';
// var list = [5, 50, 46]

// Pessoa.nome = 'Carlos'
// Pessoa.corOlhos = 'green'

// function dataPessoa(pessoa) {
//     console.log(pessoa.boletim);
// }

var doc = document;
var reparos = doc.querySelectorAll('.service-item.row .servicos-item');
reparos.forEach(item => {
    item.addEventListener('click', event => {
        const children = event.target.parentNode.parentNode.children;
        Array.prototype.forEach.call(children, element => {
            element.firstElementChild.classList.remove('format');
        });
        event.target.classList.toggle('format')
    });
});
>>>>>>> Stashed changes:js/app.js
