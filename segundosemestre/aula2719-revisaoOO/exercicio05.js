class Musica{
    titulo;
    artista;
    album;
    duracao;

    tocar(nome){
        if(nome == this.titulo){
            console.log(`Tocando ${this.titulo}`);
        }
        else{
            console.log('Música não localizada');
        }
    }
}

let musica1 = new Musica();
musica1.titulo = 'Menos Foco Mais Ansiedade 2.0';
musica1.artista = 'Comendinha';
musica1.album = 'Menos Foco Mais Ansiedade 2.0';
musica1.duracao = '3:00';

let musica2 = new Musica();
musica2.titulo = 'Ficou Bravo 2';
musica2.artista = 'Comendinha';
musica2.album = 'Ficou Bravo 2';
musica2.duracao = '3:00';

let musica3 = new Musica();
musica3.titulo = 'Tá Pedindo Toma';
musica3.artista = 'Comendinha';
musica3.album = 'Tá Pedindo Toma';
musica3.duracao = '3:00';

musica1.tocar('Evidências');
musica2.tocar('Aquarela');
musica3.tocar('Errada');