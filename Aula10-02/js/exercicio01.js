const corpo = document.getElementById('corpo');
const titulo = document.getElementById('titulo');
const container = document.querySelector('.container');
const texto = document.querySelector('.texto');
let nome = 'Arthur Hidalgo';

titulo.textContent += " - " + nome;
texto.textContent += ' , e esse é escrito no JS';
corpo.style.backgroundColor = 'purple';
container.style.backgroundColor = 'pink';
titulo.style.color = 'white';
titulo.style.border = '1px solid white';
texto.style.color = 'black';
texto.style.fontFamily = 'Arial';
texto.style.fontSize = '20px';
