// Declaração de função (Função hoisting)
function falaOi() {
    console.log('Oi');
}
falaOi(); // Neste caso, podemos chamar a função no topo ou aqui msm

// First-class objets (Objetos de primeira classe)
// Function Expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
};
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();