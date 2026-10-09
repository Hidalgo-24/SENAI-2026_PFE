const temperaturas = [33, 37, 39, 23, 40, 27, 25];

function ordenaTemperaturas(temperaturas){
    for(let i = 0; i < temperaturas.length; i++){
        let menor = i;
        for(let j = i + 1; j < temperaturas.length; j++){
            if(temperaturas[j] < temperaturas[menor]){
                menor = j;
            }
        }
        let temp = temperaturas[i];
        temperaturas[i] = temperaturas[menor];
        temperaturas[menor] = temp;
    }
    return temperaturas;
}

console.log('Temperaturas ordenadas:', ordenaTemperaturas(temperaturas));