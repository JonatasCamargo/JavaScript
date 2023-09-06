/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// if pode ser usado sozinho
// já o else sempre que utilizado precisará de um if antes
// else if pode se criado diversas vezes na checagem
// só pode ter um else na checagem
// podemos usar condiçoes sem else if, utilizando apenas if e else

const hora = 48;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia pessual');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}