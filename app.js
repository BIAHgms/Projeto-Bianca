// Seleciona o elemento com a classe 'container' no documento
const container = document.querySelector('.container'); 
// Seleciona o elemento de entrada 'input' no documento
const color = document.querySelector('input'); 

// Define a cor padrão como branco
const defaultColor = '#fff'; 
// Aplica a cor padrão ao fundo do elemento 'container'
container.style.backgroundColor = `${defaultColor}`; 

// Função que altera a cor de fundo do 'container' com base na cor escolhida
function onChangeBg() { 
    // Aplica a cor selecionada no fundo do 'container'
    container.style.backgroundColor = `${color.value}`; 
}