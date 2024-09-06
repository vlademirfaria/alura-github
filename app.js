// Obtém o campo de pesquisa
let campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um ouvinte de evento para o pressionamento de tecla no campo de pesquisa
campoPesquisa.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); 
    pesquisar();
  }
});

function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa, remove acentos e converte para minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  // Verifica se o campo de pesquisa está vazio ou contém apenas caracteres especiais
  if (campoPesquisa.trim() === "" || !/[a-zA-Z0-9]/.test(campoPesquisa)) {
    section.innerHTML = ""; 
    return; 
  }

  // Inicializa a variável que armazenará o HTML dos resultados
  let resultados = "";

  // Itera sobre os dados e constrói o HTML para cada resultado
  for (let carta of cartas) {
    // Normaliza e converte para minúsculas o nome, tipo e descrição da carta
    let nome = carta.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let descricao = carta.descricao.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let tipo = carta.tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 

    if (nome.includes(campoPesquisa) || tipo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) { 
      let ataqueExibido = carta.ataque !== null ? carta.ataque : 0;
      let defesaExibida = carta.defesa !== null ? carta.defesa : 0;

      resultados += `
        <div class="item-resultado"> 
            <h2>${carta.nome}</h2>
            <p class="descricao-meta">
                <b>Tipo da carta:</b> ${carta.tipo}<br>
                <b>Ataque: </b> ${ataqueExibido}<br> 
                <b>Defesa: </b> ${defesaExibida}<br> 
                <b>Descrição da carta: </b> ${carta.descricao}
            </p>
            <a href="https://pt.wikipedia.org/wiki/Yu-Gi-Oh!" target="_blank">O que é o Yu-gi-oh?</a>
        </div>
      `;
    }
  }

  // Verifica se algum resultado foi encontrado
  if (resultados === "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
  } else {
    section.innerHTML = resultados;
  }
}