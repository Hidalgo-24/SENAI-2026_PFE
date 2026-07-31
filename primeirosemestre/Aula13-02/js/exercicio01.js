const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const botao = document.querySelector('.botao');


titulo.textContent = 'Sexta feira de Carnaval!';

container.style.backgroundColor = '#56e419'
container.style.width = '94%';
container.style.margin = '0 auto';
let subtitulo = '<h2>Programação Front-End</h2>';
container.innerHTML += subtitulo;
let imagem = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMrw0URXPxss94hwEcUp3EbgT6iU3tKpqRw&s" alt="Imagem da cidade">';
container.innerHTML += imagem;
let contador = 0;
botao.addEventListener('click',() => {
    alert('Você clicou no botão ' + contador + 'vezes')
    contador ++;
})