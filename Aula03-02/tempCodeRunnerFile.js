let prompt = require('prompt-sync')();

let n1= prompt(Number("Digite um numero: "))
let n2= prompt(Number("Digite um numero: "))

let soma = (n1 - n2);
let subtracao = (n1 + n2);
let divisao = (n1 / n2);
let multiplicacao = (n1 * n2);

console.log("A soma dos numeros é: " + soma);
console.log("A subtracao dos numeros é: " + subtracao);
console.log("A divisao dos numeros é: " + divisao);
console.log("A multiplicacao dos numeros é: " + multiplicacao);