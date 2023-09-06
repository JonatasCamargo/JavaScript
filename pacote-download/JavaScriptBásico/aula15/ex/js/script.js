const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('NaN');
const praBaixo = document.getElementById('pra-baixo');
const praCima = document.getElementById('pra-cima');
const duasCasas = document.getElementById('duas-casas');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p>Raiz quadrada: ${numero ** (1/2)}. </p>`;
inteiro.innerHTML = `<p>${numero} É inteiro: ${Number.isInteger(numero)}. </p>`;
nan.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}. </p>`;
praBaixo.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}. </p>`;
praCima.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}. </p>`;
duasCasas.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}. </p>`;