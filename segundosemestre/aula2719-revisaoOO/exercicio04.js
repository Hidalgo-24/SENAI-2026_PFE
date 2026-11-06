class Celular{
    marca;
    modelo;
    cor;
    bateria;

    ligar(){
        console.log('Celular ligado');
    }

    desligar(){
        console.log('Celular desligado');
    }

    carregarBateria(percentual){
        this.bateria = this.bateria + percentual;
        if(this.bateria > 100){
            this.bateria = 100;
        }
    }
}

let celular = new Celular();
celular.marca = 'Samsung';
celular.modelo = 'S23 FE';
celular.cor = 'Preto';
celular.bateria = 50;
celular.carregarBateria(60);
console.log(celular);