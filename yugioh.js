// Listas para armazenar as cartas
let cartasPersonagem = [];
let cartasItem = [];
let cartasArma = [];

// Função para gerar uma carta
function gerarCarta(tipo) {
    return {
        nome: `Carta ${tipo} ${Math.floor(Math.random() * 10000)}`, // Nome aleatório
        tipo: tipo,
        pontoDeForca: Math.floor(Math.random() * 1000), // Pontos de força aleatórios entre 0 e 999
        descricao: `Descrição da carta ${tipo}` // Descrição genérica, você pode customizar
    };
}

// Loop para gerar as cartas
for (let i = 0; i < 10000; i++) {
    cartasPersonagem.push(gerarCarta("Personagem"));
    cartasItem.push(gerarCarta("Item"));
    cartasArma.push(gerarCarta("Arma"));
}

// Exemplo de como acessar as cartas
console.log(cartasPersonagem[0]); 
console.log(cartasItem[500]); 
console.log(cartasArma[9999]); 