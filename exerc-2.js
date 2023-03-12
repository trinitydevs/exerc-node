const readline = require('readline-sync');


const num1 = readline.questionInt("Digite um número: \n");
const num2 = readline.questionInt("Digite outro número: \n");
const num3 = readline.questionInt("Digite o último número: \n");

console.log(`Soma dos números digitados anteriormente: ` + (num1 + num2 + num3));