const readline = require('readline-sync');

const num1 = readline.questionInt("Digite um numero: \n");
const num2 = readline.questionInt("Digite outro numero: \n");

const resposta = readline.question("Deseja executar as operacoes? \n");

if(resposta == "sim" || resposta == "s" || resposta == "SIM" || resposta == "S"){
    console.log(`SOMA: ` + (num1 + num2));
    console.log(`SUBTRAÇÃO: ` + (num1 - num2));
    console.log(`MULTIPLICAÇÃO: ` + (num1 * num2));
    console.log(`DIVISÃO: ` + (num1/num2));
}