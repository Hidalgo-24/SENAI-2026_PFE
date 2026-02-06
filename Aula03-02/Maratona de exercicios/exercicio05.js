let prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));

if (n1 === 0 || n2 === 0) {
    console.log("Um dos números informados é zero");
} else if (n1 > n2) {
    console.log("O primeiro número é o maior: " + n1);
} else if (n2 > n1) {
    console.log("O segundo número é o maior: " + n2);
} else {
    console.log("Os números são iguais");
}