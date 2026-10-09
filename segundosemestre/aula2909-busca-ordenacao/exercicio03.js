const notas = [7, 10, 8, 10, 9, 10, 6];

function contarNotas(notas) {

    let quantidade = 0;

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] === 10) {
            quantidade++;
        }

    }

    if (quantidade === 0) {
        console.log("Nenhuma nota 10 foi encontrada.");
    }

    return quantidade;
}

console.log("Quantidade de notas 10: " + contarNotas(notas));