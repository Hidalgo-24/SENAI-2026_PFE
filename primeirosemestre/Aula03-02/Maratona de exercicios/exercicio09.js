letprompt = require('prompt-sync')();
let preco = Number(prompt("Digite o preço: "));
let cupom = prompt("Digite o cupom (BRONZE, PRATA, OURO): ");
let precoFinal = preco;

if (cupom === "BRONZE") {
    precoFinal = preco * 0.95;
} else if (cupom === "PRATA") {
    precoFinal = preco * 0.90;
} else if (cupom === "OURO") {
    precoFinal = preco * 0.85;
} else {
    console.log("Cupom inválido, sem desconto aplicado.");
}

console.log("Preço final: " + precoFinal);