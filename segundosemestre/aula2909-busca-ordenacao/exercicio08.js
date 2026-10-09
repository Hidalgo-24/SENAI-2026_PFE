const palavras = ["banana", "maca", "melao", "melancia", "abacate"];

function ordenaPalavras(palavras) {

    for (let i = 0; i < palavras.length; i++) {

        for (let j = 0; j < palavras.length - 1; j++) {

            if (palavras[j].length > palavras[j + 1].length) {

                let temp = palavras[j];

                palavras[j] = palavras[j + 1];

                palavras[j + 1] = temp;
            }
        }
    }

    return palavras;
}

console.log("Palavras ordenadas: " + ordenaPalavras(palavras));