let prompt = require('prompt-sync')();
let nota = Number(prompt("Digite a nota (0-100): "));

if (nota >= 90) {
    console.log("Conceito: A");
} else if (nota >= 80) {
    console.log("Conceito: B");
} else if (nota >= 70) {
    console.log("Conceito: C");
} else if (nota >= 60) {
    console.log("Conceito: D");
} else {
    console.log("Conceito: F");
}