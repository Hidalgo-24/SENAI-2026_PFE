class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        
        if (preco >= 0 && estoque >= 0) {
            this.preco = preco;
            this.estoque = estoque;
        } else {
            console.log(`Erro: Preço ou estoque do produto "${nome}" não podem ser negativos!`);
            this.preco = 0;
            this.estoque = 0;
        }
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }
}

const p1 = new Produto("Teclado Gamer", 200, 10);
const p2 = new Produto("Monitor 4K", 1500, 5);

p1.aplicarDesconto(10);

console.log(`Produto 1: ${p1.nome} | Preço: R$${p1.preco} | Total em estoque: R$${p1.valorEmEstoque()}`);
console.log(`Produto 2: ${p2.nome} | Preço: R$${p2.preco} | Total em estoque: R$${p2.valorEmEstoque()}`);