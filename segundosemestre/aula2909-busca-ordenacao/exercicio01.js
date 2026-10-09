const numeros = [10, 25, 30, 45, 50];

function buscarIndice(array, numero) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === numero) {
            return i;
        }

    }

    return -1;
}

console.log(buscarIndice(numeros, 30));
console.log(buscarIndice(numeros, 99));