/*console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');*/

// i - index
//para pular o número em mais vezes *ex: i += 10)
//para fazer de forma descrecente *ex: i -= 10)

/*for (let i = 0; i <= 10; i++) {    
  const par = i % 2 === 0 ? 'par' : 'ímpar';
  console.log(i, par);     
}*/
const funcionários = ['Jonas', 'Joelma', 'Jonatas'];

for (let i = 0; i < funcionários.length; i++) {
  console.log(`Números de falta ${i}`, funcionários[i]);
}