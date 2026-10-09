const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
let quantidade = nome.length;

console.log("O seu nome tem " + quantidade + " caracteres.");