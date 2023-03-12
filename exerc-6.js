const readline = require('readline-sync');

console.log("Carregue as notas do aluno na disciplina de Literatura");

const nota1 = readline.questionFloat("Digite a primeira nota \n");
const nota2 = readline.questionFloat("Digite a primeira nota \n");
const nota3 = readline.questionFloat("Digite a primeira nota \n");

const media = (nota1 + nota2 + nota3)/3;

if(media >= 7){
    console.log("Média de " + media + ", aluno aprovado!");
}else{
    console.log("Média de " + media + ", aluno reprovado!");
}