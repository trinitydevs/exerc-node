const readline = require('readline-sync');

const n1 = readline.question("Digite o primeiro numero: \n");
const n2 = readline.question("Digite o segundo numero: \n");

if(n1 > n2){
    console.log(`O numero maior é: ` + n1);
    if(n1 == n2){
        console.log("Ambos possuem o mesmo valor");
    }
}else{
    console.log(`O numero maior é: ` + n2);
}
