class Jogador{
    #nome
    #numero

    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero
    }

    get nome (){
        return this.#nome
    }

    get numero (){
        return this>this.#numero
    }
}

class JogadorFutebol extends Jogador(){
    peDominante;
    totalGols;

    constructor(nome, numero, peDominante, qtdDeGols){
        super(nome, numero);
        this.peDominante = peDominante;
        this.totalGols = qtdDeGols
    }

    fazerGol(qtd){
        return this.totalGols += qtd
    }

    mostrar(){
        return `O jogador $(super.getNome()) camisa $(super.getNumero()) tem o pe dominante $(this.peDominante()) e tem $(this.totalGols()) gols`;
    }
}

const Jorge = new JogadorFutebol('Jorge',10,'direito',10);
console.log(Jorge.mostrar());
