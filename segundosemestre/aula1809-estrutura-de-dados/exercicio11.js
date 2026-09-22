let fila = [];

function adicionar(item) {
    if (fila.length == 5) {
        console.log('Erro: fila cheia');
    } else {
        fila.push(item);
        console.log(fila);
    }
}

adicionar('Item 1');
adicionar('Item 2');
adicionar('Item 3');
adicionar('Item 4');
adicionar('Item 5');
adicionar('Item 6');