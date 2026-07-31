class Livro {
titulo = 'A Culpa é das Estrelas';
    autor = 'John Green';
    ano = 2012;
    paginas = 288;
    editora = 'Intrínseca';
    genero = 'Romance / Drama';
    tema = 'Amor e Superação';
    idioma = 'Português';

    abrir() {
        console.log('Você abriu o livro: ');
    }

    fechar() {
        console.log('Você fechou o livro: ');
    }
}
const meuLivro = new Livro();
meuLivro.abrir();
meuLivro.fechar();