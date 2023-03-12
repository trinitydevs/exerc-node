const readline = require('readline-sync');

const senha = readline.question("Digite a senha: ",{
    hideEchoBack: true,
});

console.log(`A sua senha é: ` + senha);