// Escreva uma function chamada ePaisagem 
// que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo 
// paisagem.

const ePaisagem = (largura, altura) => largura > altura; // melhor opção e a mais usada
                                                         // quando há apenas uma linha

console.log(ePaisagem(220, 1800));



/*function ePaisagem(largura, altura) {  // forma rápida, mas a acima é a mais usada
    return largura > altura ;
}*/

/*function ePaisagem(largura, altura) {    // forma mais demorada
  if (largura > altura) {
      return true;
  } else {
    return false;
  }
}

console.log(ePaisagem(220, 180));*/