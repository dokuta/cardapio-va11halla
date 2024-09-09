function pesquisar() {
    // procura no html (document) o que foi pedido (após o ponto)
    let sectionResultados = document.getElementById("resultados-pesquisa");

    // armazena o que foi escrito na barra de pesquisa (.value)
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // caso a pesquisa esteja vazia
    if (!campoPesquisa) {
        // o innerHTML injeta o js dentro do html
        sectionResultados.innerHTML = "<h3>Pesquisa vazia. Tente procurar por alguma bebida ou sabor!</h3>";
        return;
    }

    // deixa a pesquisa em minúsculo
    campoPesquisa = campoPesquisa.toLowerCase();

    // variável não crítica (diferente da sectionResultados) que vai armazenar todo o for
    let resultados = "";

    // prepara os atributos para serem tratados no for (minúsculos)
    let nome = "";
    let descricao = "";
    let sabor = "";
    let tipo = "";
    let tags = "";

    // o for itera sobre o array de objetos "drinks"
    // o $ sinaliza uma variável
    for (let index of drinks) {
        // deixa os dados em minúsculo
        nome = index.nome.toLowerCase();
        descricao = index.descricao.toLowerCase();
        sabor = index.sabor.toLowerCase();
        tipo = index.tipo.toLowerCase();
        tags = index.tags.toLowerCase();

        // busca o nome digitado na pesquisa dentro dos dados
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || sabor.includes(campoPesquisa) || tipo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria o elemento html na página a partir da busca
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${index.nome}
                </h2>
                <p class="descricao-meta">
                    ${index.descricao} <br>
                    <strong>Sabor:</strong> ${index.sabor} <br>
                    <strong>Tipo:</strong> ${index.tipo} <br>
                    <strong>Preço:</strong> $${index.preco} <br>
                </p>
                <a href="${index.link}" target="_blank">Ingredientes e mais!</a>
            </div>
        `;
        }
    }

    // caso a busca não exista
    if (!resultados) {
        resultados = "<h3>Infelizmente, nada foi encontrado. Tente novamente!</h3>";
    }

    // boas práticas: variável crítica sem ter muita manipulação
    sectionResultados.innerHTML = resultados;
}