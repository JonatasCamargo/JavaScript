const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue - continua para próxima iteração
// Break sai do laço

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if ( numero === 2) {
        console.log('Pulei o número dois');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Sete encontrado, saindo...');
        i++;
        break;
     }

        i++;
    }













/*for (let numero of numeros) {

    if ( numero === 2) {
        console.log('Pulei o número dois');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Sete encontrado, sindo...');
        break;
    }
}*/