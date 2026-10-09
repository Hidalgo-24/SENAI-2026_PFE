const produtos = [
    { nomeProduto: "Arroz", preco: 25 },
    { nomeProduto: "Feijao", preco: 18 },
    { nomeProduto: "Leite", preco: 6 },
    { nomeProduto: "Cafe", preco: 22 }
];

function buscarProduto(produtos) {

    for (let i = 0; i < produtos.length; i++) {

        if (produtos[i].preco < 20) {
            return produtos[i].nomeProduto;
        }

    }

    return null;
}

console.log("Produto encontrado: " + buscarProduto(produtos));