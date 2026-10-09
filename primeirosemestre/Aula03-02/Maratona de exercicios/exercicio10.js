let prompt = require('prompt-sync')();
let peso = Number(prompt("Digite o peso (kg): "));
let altura = Number(prompt("Digite a altura (m): "));
let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}