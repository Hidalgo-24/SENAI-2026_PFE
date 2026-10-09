let nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas'];

function removerNome() {
    if (nomes.length == 0) {
        console.log('A fila está vazia');
    } else {
        nomes.shift();
        console.log(nomes);
    }
}

removerNome();