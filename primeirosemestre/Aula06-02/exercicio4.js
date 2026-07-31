const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
let agora = new Date();

let dia = agora.getDate();
let mes = agora.getMonth() + 1; 
let ano = agora.getFullYear();

console.log("Relatório de data para: " + nome);
console.log("O dia do mês:", dia);
console.log("O mês:", mes);
console.log("O ano completo:", ano);