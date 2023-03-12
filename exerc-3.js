const readline = require('readline-sync');

const idade = readline.questionInt("Digite sua idade: \n");

if(idade >= 18){
    console.log("Você é maior de idade. Pode entrar!");
}else{
    console.log("Você é menor de idade. Não pode entrar!");
}