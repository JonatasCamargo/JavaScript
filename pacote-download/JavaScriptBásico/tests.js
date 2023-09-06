const resultNumber = prompt('Digite seu número');
document.body.innerHTML += `Seu número é  <strong>${resultNumber}</strong> <br />`;
document.body.innerHTML += `Raiz quadrada: ${resultNumber ** (1/2)} <br />`;
document.body.innerHTML += `55 é inteiro: ${Number.isInteger(resultNumber)} <br />`;
document.body.innerHTML += `É NaN: ${Number.isNaN(resultNumber)} <br />`;
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(resultNumber)} <br />`;
document.body.innerHTML += `Arredondado para cima: ${Math.ceil(resultNumber)} <br />`;

/*está foi a maneira que você achou para resolver o excercicio aula 15 math and numbers*/