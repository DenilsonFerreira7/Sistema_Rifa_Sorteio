

  // Função para redirecionar para a página "consultarTodos.html"
  function redirecionarConsultarTodos() {
    window.location.href = "consultarTodos.html";
  }

  // Função para criar os botões numerados
  function createNumberButtons() {
    var numeroButtonsDiv = document.getElementById("numero-buttons");

    for (var i = 1; i <= 100; i++) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "btn btn-number btn-white"; // Adiciona a classe btn-white
      button.textContent = i;

      button.addEventListener("click", function() {
        abrirPopup(this.textContent);
      });

      // Verifica se o número está cadastrado e altera a cor do botão
      checkNumeroCadastrado(i, button);

      numeroButtonsDiv.appendChild(button);

      if (i % 10 === 0) {
        // Adiciona uma quebra de linha após cada 10 botões
        numeroButtonsDiv.appendChild(document.createElement("br"));
      }
    }
  }

  //abrir popup
  function abrirPopup(numero, acao) {
    var url;
    if (acao === "consultar") {
      url = "consultar.html?numero=" + numero;
    } else {
      url = "cadastrar.html?numero=" + numero;
    }
    var popup = window.open(url, "Popup", "width=700,height=700,left=1000");
    if (!popup) {
      alert("O bloqueador de pop-ups está ativado. Por favor, desative-o para abrir o popup.");
    }
  }

  //checar se o numero do botão existe ou não na base de dados
  function checkNumeroCadastrado(numero, button) {
    var url = "/rifa/consultar/" + numero;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);

        if (response !== null) {
          button.classList.add("btn-success"); // Adiciona a classe btn-success
          button.addEventListener("click", function() {
            abrirPopup(numero, "consultar"); // Passa dois parâmetros: numero e "consultar"
          });
        } else {
          button.addEventListener("click", function() {
            abrirPopup(numero, "cadastrar"); // Passa dois parâmetros: numero e "cadastrar"
          });
        }
      }
    };
    xhr.send();
  }

  // Evento de clique do botão "SORTEAR"
  var btnSortear = document.getElementById("btn-sortear");
  btnSortear.addEventListener("click", function() {
    var url = "sortear.html";
    var popup = window.open(url, "Popup", "width=800,height=700,left=1000");
    if (!popup) {
      alert("O bloqueador de pop-ups está ativado. Por favor, desative-o para abrir o popup.");
    }
  });

  // Chamada da função para criar os botões numerados
  createNumberButtons();