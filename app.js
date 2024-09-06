
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // se campoPesqiosar for uma string sem nada
//if (campoPesquisa == "") {
   // section.innerHTML = "<p>Nada foi encontrado</p>"
  //    return 
  // }

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
             // Cria o HTML para um item de resultado, incluindo o título, descrição e link
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}
          <a href="${dado.link}" target="_blank">Mais Informações</a>
        </p>
      </div>
    `;
   }
 }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }


  
    // Atualiza o conteúdo da seção com os resultados HTML gerados
    section.innerHTML = resultados;
  }







    
