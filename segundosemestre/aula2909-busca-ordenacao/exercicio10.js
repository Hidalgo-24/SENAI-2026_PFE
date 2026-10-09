const numerosTroca = [5, 2, 8, 1, 3];

function ordenaNumeros(numeros) {

    let trocas = 0;
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
                trocas++;
            }
        }
    }

    console.log("Array ordenado: " + numeros);
    console.log("Quantidade de trocas: " + trocas);

    return numeros;
}

ordenaNumeros(numerosTroca);