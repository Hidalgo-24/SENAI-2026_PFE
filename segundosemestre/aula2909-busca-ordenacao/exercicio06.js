const idadeEstudantes = [20, 17, 18, 19, 16, 11, 14, 13, 12, 15, 10];

function ordenaIdades(idades) {

    console.log("Antes: " + idades);

    for (let i = 0; i < idades.length; i++) {

        for (let j = 0; j < idades.length - 1; j++) {

            if (idades[j] > idades[j + 1]) {

                let temp = idades[j];

                idades[j] = idades[j + 1];

                idades[j + 1] = temp;
            }
        }
    }

    return idades;
}

console.log("Depois: " + ordenaIdades(idadeEstudantes));