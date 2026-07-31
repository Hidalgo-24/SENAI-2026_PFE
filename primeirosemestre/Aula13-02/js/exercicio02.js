const titulo = document.querySelector('#titulo-principal');
const container = document.querySelector('#container-conteudo');
const botao = document.querySelector('#meu-botao');

document.body.style.backgroundColor = '#f0f0f0'; // Fundo cinza claro
titulo.style.color = 'darkblue';                 // Título em azul escuro
botao.style.padding = '10px 20px';               // Botão com preenchimento
botao.style.cursor = 'pointer';                  // Cursor de mãozinha
container.style.marginTop = '20px';              // Espaço acima da div


botao.addEventListener('click', function() {
    
    container.innerHTML = '<h2>Esse é o patrick estrela xupin!</h2>';
    
    
    container.innerHTML += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMrw0URXPxss94hwEcUp3EbgT6iU3tKpqRw&s" alt="Imagem Legal" style="border: 5px solid white; box-shadow: 2px 2px 10px rgba(0,0,0,0.2);">';

    titulo.innerText = 'UHUHUHUHUHHUHUH VOCE CLICOU PARABENS!!';
    titulo.style.color = 'green';
});