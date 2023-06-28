

//SORTEAR NUMERO
function obterNumeroSorteado() {
    fetch("http://localhost:8080/rifa/numeroAleatorio")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var numeroSorteado = data.numero;
        var nome = data.nome;
        var telefone = data.telefone;
        var valor = data.valor;

        // Preenche os dados na página
        document.getElementById("numeroSorteado").textContent = numeroSorteado;
        document.getElementById("nome").textContent = nome;
        document.getElementById("telefone").textContent = telefone;

      })
      .catch(function(error) {
        console.error("Erro ao obter número sorteado:", error);
      });
  }

  // Chama a função para obter o número sorteado e preencher os dados na página
  obterNumeroSorteado();