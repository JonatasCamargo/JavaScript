// for i -> lê os indíces ou chaves do objeto
//                  0          1         2
const pessoa = {
    nome: 'Jonatas',
    sobrenome: 'Camargo',
    idade: 18
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

/*for (let chaves in pessoa) {
  console.log(chaves);
}*/

/*for (let i in frutas) {
  console.log(frutas[i]);
}*/



//for (let i = 0; i < frutas.length; i++ ) {
//  console.log(frutas[i]);
//}