var nome = prompt('Digite seu nome','');
var notaDoPrimeiroBimestre = prompt('Digite a nota do  1º Bim', '');
var notaDoSegundoBimestre = prompt('Digite a nota do  2º Bim', '');

processoDeAvaliacao(nome, notaDoPrimeiroBimestre, notaDoSegundoBimestre);

function processoDeAvaliacao(nome, notaDoPrimeiroBimestre, notaDoSegundoBimestre) {
    var mediaBimestralAluno;
    var mensagem;

    if (!nome) {
        console.log('Ops! digite seu nome');
        alert('Ops! digite seu nome');
    }
    
    mediaBimestralAluno =  (+notaDoPrimeiroBimestre + +notaDoSegundoBimestre) / 2;
    mensagem = ` Olá ${nome} sua media bimestral é ${mediaBimestralAluno}`;

    console.log(mensagem);
    alert(mensagem);
}


