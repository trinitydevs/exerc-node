const readline = require('readline-sync');

const numero = readline.question("Digite um número e verifique se é positivo ou negativo: \n");

if(numero < 0 ){
    console.log(`O número ` + numero + ` é negativo`);
}else{
    console.log(`O número ` + numero + ` é positivo`);
}
