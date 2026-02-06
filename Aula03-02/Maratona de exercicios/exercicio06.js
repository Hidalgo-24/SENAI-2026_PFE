let prompt = require('prompt-sync')();
let idade = Number(prompt("Digite a idade: "));

if (idade < 12) {
    console.log("criança");
} else if (idade >= 12 && idade < 18) {
    console.log("adolescente");
} else if (idade >= 18 && idade < 60) {
    console.log("adulto");
} else {
    console.log("idoso");
}