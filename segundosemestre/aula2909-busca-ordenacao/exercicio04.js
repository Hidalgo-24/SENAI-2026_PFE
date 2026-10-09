const contatos = [
    { nome: "Fulano", telefone: "18982828989" },
    { nome: "Ciclano", telefone: "11971717171" }
];

function buscarContato(contatos, nome) {

    for (let i = 0; i < contatos.length; i++) {

        if (contatos[i].nome === nome) {
            return contatos[i].telefone;
        }

    }

    return "Contato não encontrado";
}

console.log(buscarContato(contatos, "Fulano"));
console.log(buscarContato(contatos, "Maria"));