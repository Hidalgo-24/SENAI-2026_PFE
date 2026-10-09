const jogos =['Minecraft', 'Light', 'Free Fire','How to Fish', 'Valorant','Pung'];

function buscaJogo(games, game){
    for(let i=0; 1< games.length; i++){
        if(game == games [i]){
            console.log(`Jogo ${games[i]} encontrado na posicção ${i}`);
            return;//finaliza execução do programa
        }
    }
    console.log('Jogo inexistente');
}

buscaJogo(jogos, 'Valorant');
