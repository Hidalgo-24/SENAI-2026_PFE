const Paises = ['Uzbequistão','Groelândia','Paquistão','Angola','Bahrein','Cabo Verde','França','Islândia','Honduras'];

function buscaPais(Paises, pais) {
    for (let i = 0; i < Paises.length; i++) {
        if (pais == Paises[i]) {
            console.log(`País ${Paises[i]} encontrado na posição ${i}`);
            return;
        }
    }

    console.log('País inexistente');
}

buscaPais(Paises, 'França');