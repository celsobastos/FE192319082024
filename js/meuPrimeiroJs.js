


var nome = prompt('Digite seu nome','');
var media = prompt('Digite sua media', '');

processoDeAvaliacao(nome, media);

function processoDeAvaliacao(nome, media) {
    if (!nome) {
        console.log('Ops! digite seu nome');
    }
    else if (nome.length < 5) {
        console.log('Ops! digite um nome maior');
    }
    else if (nome.length > 20 ) {
        console.log('Ops! digite um nome menor');
    }
    else {
        console.log('Parabéns');
    }
    var mediaBimestralAluno = media >= 7 ? 'Aprovado' : 'Reprovado';
    console.log(`Parabéns ${nome} voce foi ${mediaBimestralAluno}`);
}


