const prompt = require('prompt-sync')();

let nomeCompleto = prompt("Digite seu nome completo: ");

let nomeMaiusculo = nomeCompleto.toUpperCase();
let nomeMinusculo = nomeCompleto.toLowerCase();

console.log("Nome em maiúsculas: " + nomeMaiusculo);
console.log("Nome em minúsculas: " + nomeMinusculo);