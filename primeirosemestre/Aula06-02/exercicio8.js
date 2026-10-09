const prompt = require('prompt-sync')();

let chute = prompt("Escolha um número de 1 a 10: ");
let sorteado = parseInt(Math.random() * 10);

console.log("Seu chute: " + chute);
console.log("Número sorteado: " + sorteado);

if (chute == sorteado) {
    console.log("Parabéns você acertou!");
} else {
    console.log("HAHAHAHHAAHAH você errou!");
}