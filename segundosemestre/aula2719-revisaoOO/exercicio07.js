class Semaforo{
    corAtual;

    abrir(){
        this.corAtual = 'Verde';
        console.log('Pode passar');
    }

    fechar(){
        this.corAtual = 'Vermelho';
        console.log('Pare');
    }

    atencao(){
        this.corAtual = 'Amarelo';
        console.log('Atenção');
    }
}

let semaforo = new Semaforo();
semaforo.abrir();
semaforo.atencao();
semaforo.fechar();
console.log(semaforo);