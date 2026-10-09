let jogadores = [];

jogadores.push('Jogador 1');
jogadores.push('Jogador 2');
jogadores.push('Jogador 3');
jogadores.push('Jogador 4');
jogadores.push('Jogador 5');

console.log(jogadores);

for (let i = 0; i < 3; i++) {
    let jogador = jogadores.shift();
    jogadores.push(jogador);
    console.log(jogadores);
}