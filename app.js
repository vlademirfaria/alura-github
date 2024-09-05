function pesquisar() {
  // Linha comentada para fins de depuração, exibe os dados no console
  // console.log(dados); 

  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Verifica se a seção foi encontrada, auxilia na depuração

  // Inicializa a variável que armazenará o HTML dos resultados
  let resultados = "";

  // Itera sobre os dados e constrói o HTML para cada resultado
  for (let carta of cartas) {
    // ... (resto do código para gerar o HTML)
  
    // Substitui null por 0 para ataque e defesa
    let ataqueExibido = carta.ataque !== null ? carta.ataque : 0;
    let defesaExibida = carta.defesa !== null ? carta.defesa : 0;
  
    // Usa os valores corrigidos no HTML, garantindo que "null" não seja exibido
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

  // Insere o HTML dos resultados na seção correspondente
  section.innerHTML = resultados;
}