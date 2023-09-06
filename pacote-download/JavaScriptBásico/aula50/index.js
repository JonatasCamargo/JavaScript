//argumento que sustenta todos os argumentos enviados (só para funções criadas com a palavra "function")

/*function funcao() {
 let total = 0;
 for (let argumento of arguments) {
    total += argumento;
 }

 console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);*/

/*function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
   }
   funcao(2, 10);*/
 
                                        // rest operator
   function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
   }
   conta('+', 0, 20, 30, 40, 50);