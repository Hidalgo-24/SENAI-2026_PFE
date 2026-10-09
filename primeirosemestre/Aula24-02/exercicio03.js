class Bicicleta {
    #modelo;
    #marca;
    #cor;
    #velocidadeMaxima;

    setModelo(valor) {
        this.#modelo = valor;
    }
    getModelo() {
        return this.#modelo;
    }

    setMarca(valor) {
        this.#marca = valor;
    }
    getMarca() {
        return this.#marca;
    }

    setCor(valor) {
        this.#cor = valor;
    }
    getCor() {
        return this.#cor;
    }

    setVelocidadeMaxima(valor) {
        if (valor > 35) {
            console.log("Erro: A velocidade máxima não pode ser superior a 35km/h.");
        } else {
            this.#velocidadeMaxima = valor;
        }
    }
    getVelocidadeMaxima() {
        return this.#velocidadeMaxima;
    }
}

const minhaBike = new Bicicleta();

minhaBike.setModelo('Mountain Bike');
minhaBike.setMarca('Caloi');
minhaBike.setCor('Azul');

minhaBike.setVelocidadeMaxima(50); 

minhaBike.setVelocidadeMaxima(30);

console.log(`Modelo: ${minhaBike.getModelo()}`);
console.log(`Velocidade permitida: ${minhaBike.getVelocidadeMaxima()}km/h`);
console.log(minhaBike); 