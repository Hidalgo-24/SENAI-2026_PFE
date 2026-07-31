const prompt = require('prompt-sync')();

let temCracha = prompt("Possui crachá?: ")
let estaDeUniforme = prompt("Está de uniforme?: ")
let ehMonitor = prompt("É monitor?: ")
let temCadastro = prompt("Tem cadastro prévio?: ")

let acessoPermitido = (
    (temCracha === 'sim' && estaDeUniforme === 'sim') ||  ehMonitor === 'sim'  ) && temCadastro === 'sim';
if (acessoPermitido) {
    console.log("PAH ACESSO LIBERADO");
} else {
    console.log("PAH ACESSO NEGADO(PALMEIRAS)");
}