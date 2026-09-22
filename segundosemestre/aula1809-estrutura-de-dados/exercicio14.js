let processos = [];

processos.push(1);
processos.push(2);
processos.push(3);
processos.push(4);
processos.push(5);

while (processos.length > 0) {
    let processo = processos.shift();
    console.log('Executando processo ' + processo);
}