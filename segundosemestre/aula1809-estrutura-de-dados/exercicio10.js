let chamados = [];

chamados.push('Chamado 1');
chamados.push('Chamado 2');
chamados.push('Chamado 3');

while (chamados.length > 0) {
    let chamado = chamados.shift();
    console.log(chamado + ' Chamado finalizado');
}