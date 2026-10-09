const prompt = require('prompt-sync')();

function calcular(n1, n2, sinal) {
    if (sinal == "+") {
        return n1 + n2;
    } 
    if (sinal == "-") {
        return n1 - n2;
    }
    if (sinal == "*") {
        return n1 * n2;
    }
    if (sinal == "/") {
        return n1 / n2;
    }
}

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número número: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");

let resultado = calcular(numero1, numero2, operacao);

console.log("O resultado da conta é: " + resultado);