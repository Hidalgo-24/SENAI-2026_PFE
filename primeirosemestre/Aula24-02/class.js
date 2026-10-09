class Veiculo{
    //atributos ou caracteristicas
    modelo = 'suv';
    marca = 'tesla - Cybertruck';
    ano = 2026;

    //métodos ou ações
    dirigir(){
        console.log('Começou a se mover');
    }
    break(){
        console.log('Parei a bagaça');
    }
}

//instaciar ou criar o objeto
const carro = new Veiculo ();
carro.dirigir();
carro.break();