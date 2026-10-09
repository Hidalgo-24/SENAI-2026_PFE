const carros = [
    { modelo: "Civic", anoFabricacao: 2020 },
    { modelo: "Gol", anoFabricacao: 2015 },
    { modelo: "Corolla", anoFabricacao: 2018 },
    { modelo: "Fusca", anoFabricacao: 1975 }
];

function ordenaCarros(carros) {

    for (let i = 0; i < carros.length; i++) {

        for (let j = 0; j < carros.length - 1; j++) {

            if (carros[j].anoFabricacao > carros[j + 1].anoFabricacao) {

                let temp = carros[j];

                carros[j] = carros[j + 1];

                carros[j + 1] = temp;
            }
        }
    }

    return carros;
}

console.log(ordenaCarros(carros));