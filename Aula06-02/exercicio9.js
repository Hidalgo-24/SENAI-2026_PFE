const prompt = require('prompt-sync')();

let numero = prompt("Digite um número para saber a raiz quadrada: ");
let raiz = Math.sqrt(numero);

console.log("A raiz quadrada de " + numero + " é: " + raiz);