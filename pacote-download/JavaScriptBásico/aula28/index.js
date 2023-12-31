function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAesquerda(data.getDate());
  const mes = zeroAesquerda(data.getMonth() + 1);
  const ano = zeroAesquerda(data.getFullYear());
  const hora = zeroAesquerda(data.getHours());
  const min = zeroAesquerda(data.getMinutes());
  const segundos = zeroAesquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);













//const data = new Date(2019, 3, 20, 15, 14, 27);
//console.log(data.toString());
/*const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());*/

