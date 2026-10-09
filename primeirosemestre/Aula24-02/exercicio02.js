class Cidade {
    qntdHabitantes = 15000;
    estado = 'São Paulo';
    nome = 'Uchoa';
    pais = 'Brasil';

    mostrarDados() {
        console.log('Cidade: Uchoa');
        console.log('Estado: São Paulo');
        console.log('País: Brasil');
        console.log('População: 15000 habitantes');
    }
}

const ultimaCidade = new Cidade();
ultimaCidade.mostrarDados();