const prompt = require('prompt-sync')();

const pontos = Number(prompt("Digite a quantidade de pontos que voce marcou: "));
let divisaopontos = pontos / 2; 

console.log("Pontos após divisão: " + divisaopontos);
divisaopontos = divisaopontos ** 2; 
console.log("Pontos após exponenciação: " + divisaopontos);