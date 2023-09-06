const nome = 'Jonatas';
const sobrenome = 'Camargo';
const idade = 18;
const peso = 73;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);