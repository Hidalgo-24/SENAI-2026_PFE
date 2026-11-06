class TimeFutebol{
    nome;
    cidade;
    quantidadeJogadores;
    quantidadeTitulos;

    mostrarInformacoes(){
        console.log(this.nome, this.cidade, this.quantidadeJogadores, this.quantidadeTitulos);

        if(this.quantidadeJogadores > 11){
            console.log('Tem um jogador a mais');
        }
        else if(this.quantidadeJogadores < 11){
            console.log('Está faltando jogadores');
        }
        else{
            console.log('Time pode jogar');
        }
    }
}

let time1 = new TimeFutebol();
time1.nome = 'Corinthians';
time1.cidade = 'São Paulo';
time1.quantidadeJogadores = 11;
time1.quantidadeTitulos = 30;

let time2 = new TimeFutebol();
time2.nome = 'Santos';
time2.cidade = 'Santos';
time2.quantidadeJogadores = 10;
time2.quantidadeTitulos = 25;

time1.mostrarInformacoes();
time2.mostrarInformacoes();