//Importando o módulo
var readline = require('readline-sync');

//Armazenar valor no input
//Semelhante ao document.getElementById
const nome = readline.question("Qual o seu nome?\n");
console.log('O nome digitado foi ' + nome);