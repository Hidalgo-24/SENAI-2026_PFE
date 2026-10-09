const prompt = require('prompt-sync')();

let agora = new Date();
let anoAtual = agora.getFullYear();

let anoNascimento = prompt("Em que ano você nasceu? ");

let idade = anoAtual - anoNascimento;

console.log("Você tem: " + idade + " anos!");