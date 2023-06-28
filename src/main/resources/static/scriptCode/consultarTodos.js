

    document.addEventListener("DOMContentLoaded", function() {
        // Ao carregar a página, fazer a requisição GET para buscar todos os números
        fetch("/rifa/todos")
            .then(response => response.json())
            .then(data => preencherTabela(data))
            .catch(error => console.error(error));

        // Função para preencher a tabela com os dados retornados
        function preencherTabela(data) {
            const tabela = document.querySelector(".table tbody");

            data.forEach(numero => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <th scope="row">${numero.numero}</th>
                    <td>${numero.nome}</td>
                    <td>${numero.telefone}</td>
                    <td>${numero.valor}</td>
                `;
                tabela.appendChild(row);
            });
        }

        // Função para buscar por nome
        function buscarPorNome() {
            const nome = document.getElementById("search-bar").value;

            // Limpa a tabela antes de fazer a busca
            const tabela = document.querySelector(".table tbody");
            tabela.innerHTML = "";

            // Faz a requisição GET para buscar os números filtrados por nome
            fetch(`/rifa/buscarNome?nome=${nome}`)
                .then(response => response.json())
                .then(data => preencherTabela(data))
                .catch(error => console.error(error));
        }

        // Adiciona o evento de clique ao botão de busca
        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", buscarPorNome);

        // Adiciona o evento de tecla ao campo de entrada de texto
        const searchInput = document.getElementById("search-bar");
        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                buscarPorNome();
            }
        });
    });

    function redirecionarPaginaInicial() {
        window.location.href = "paginainicial.html";
    }