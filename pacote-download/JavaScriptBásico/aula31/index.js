// let tem escopo de bloco {... bloco}
// var só tem escopo de função



const verdadeira = true;

let nome = 'Luiz'; //criando
var nome2 = 'Luiz'; //criando

var nome2 = 'Otávio'; //redeclarada


if (verdadeira) {
    let nome = 'Otávio'; //criando..., está variável não é a msm que a de cima
    var nome2 = 'Rogério'; //redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo' //redeclarando
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);