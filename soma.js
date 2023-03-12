//Importando o pacote
const readline = require('readline-sync');


//Criando variável

const num1 = readline.questionInt("Digite um número: \n");
const num2 = readline.questionInt("Digite outro número: \n");

console.log(`Soma dos números digitados anteriormente: ` + (num1 + num2));