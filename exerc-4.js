const readline = require('readline-sync');

const numero = readline.question("Digite um número e verifique se é par ou ímpar: \n");

if(numero%2 == 0 ){
    console.log(`O numero ` + numero + ` é par`);
}else{
    console.log(`O numero ` + numero + ` é impar`);
}
