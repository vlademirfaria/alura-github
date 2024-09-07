// Obtém o campo de pesquisa
let campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um ouvinte de evento para o pressionamento de tecla no campo de pesquisa
campoPesquisa.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // Verifica se a tecla pressionada é Enter (código 13)
    event.preventDefault(); // Impede o comportamento padrão do Enter (recarregar a página)
    pesquisar(); // Chama a função de pesquisa
  }
});

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  if (campoPesquisa.trim() === "" || !/[a-zA-Z0-9]/.test(campoPesquisa)) {
    section.innerHTML = ""; 
    return; 
  }

  let resultados = "";

  for (let carta of cartas) {
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

  if (resultados === "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
  } else {
    section.innerHTML = resultados;
  }
}

function mostrarTodas() {
  let section = document.getElementById("resultados-pesquisa");
  let resultados = "";

  for (let carta of cartas) {
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

  if (resultados === "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
  } else {
    section.innerHTML = resultados;
  }
}