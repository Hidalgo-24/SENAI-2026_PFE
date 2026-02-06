let prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite o primeiro número: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");
let n2 = Number(prompt("Digite o segundo número: "));

if (operacao === "+") {
    console.log("Resultado: " + (n1 + n2));
} else if (operacao === "-") {
    console.log("Resultado: " + (n1 - n2));
} else if (operacao === "*") {
    console.log("Resultado: " + (n1 * n2));
} else if (operacao === "/") {
    console.log("Resultado: " + (n1 / n2));
} else {
    console.log("Operação inválida");
}