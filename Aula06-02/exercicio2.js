const prompt = require('prompt-sync')();

const idade = Number(prompt("Informe a sua idade: "));

if (idade >= 16) {
    console.log("Você tem idade suficiente para pegar livros emprestados.");
    
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você ainda é menor de idade.");
    }

} else {
    console.log("Sinto muito, você não pode pegar os livros.");
}