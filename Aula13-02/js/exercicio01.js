const tituloH2 = document.querySelector('.titulo-pagina');
const container = document.querySelector('#container');
const areaImagem = document.querySelector('#area-imagem');

tituloH2.innerText = 'Bem-vindo à Aula de DOM';

container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#f0f0f0';
container.style.textAlign = 'center';

container.innerHTML = '<h2 id="SENAI"></h2>';
document.querySelector('#SENAI').innerText = 'SENAI: Desenvolvimento de Sistemas';

areaImagem.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMrw0URXPxss94hwEcUp3EbgT6iU3tKpqRw&s" alt="Imagem">';