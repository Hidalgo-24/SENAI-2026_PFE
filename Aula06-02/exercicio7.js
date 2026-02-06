const prompt = require('prompt-sync')();
let numeroDecimal = prompt("Digite um número com casas decimais: ");
let numeroArredondado = Math.round(numeroDecimal);
console.log("O número " + numeroDecimal + " arredondado é: " + numeroArredondado);