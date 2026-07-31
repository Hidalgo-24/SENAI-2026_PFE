class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }

    concluir() {
        this.concluida = true;
    }

    reabrir() {
        this.concluida = false;
    }
}

class ListaTarefas {
    constructor() {
        this.tarefas = []; 
    }

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
    }

    removerPorTitulo(tituloProcurado) {
        let novaLista = [];
        for (let i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].titulo !== tituloProcurado) {
                novaLista.push(this.tarefas[i]);
            }
        }
        this.tarefas = novaLista;
    }

    listar(filtro = null) {
        if (filtro === null) {
            return this.tarefas;
        }
        let listaFiltrada = [];
        for (let i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].concluida === filtro) {
                listaFiltrada.push(this.tarefas[i]);
            }
        }
        return listaFiltrada;
    }
}

const minhaLista = new ListaTarefas();

const t1 = new Tarefa("Estudar ", "Aula básica");
const t2 = new Tarefa("Lavar Louça", "Usar detergente");
const t3 = new Tarefa("Academia", "Correr");

minhaLista.adicionar(t1);
minhaLista.adicionar(t2);
minhaLista.adicionar(t3);

t1.concluir();
minhaLista.removerPorTitulo("Academia");

console.log("TODAS AS TAREFAS:");
let listaTotal = minhaLista.listar();
for (let i = 0; i < listaTotal.length; i++) {
    let status = listaTotal[i].concluida ? "OK" : "PENDENTE";
    console.log(status + " - " + listaTotal[i].titulo);
}

console.log("APENAS CONCLUÍDAS:");
let listaConcluidas = minhaLista.listar(true);
for (let i = 0; i < listaConcluidas.length; i++) {
    console.log(listaConcluidas[i].titulo);
}