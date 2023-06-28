

// VERIFICAR SE NOME EXISTE, SE SIM FAÇA UM GET
function consultarUsuario(numero) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/rifa/consultar/" + numero, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var dados = JSON.parse(xhr.responseText);
        exibirDadosConsulta(dados);
      } else {
        alert("Erro ao consultar: " + xhr.statusText);
      }
    }
  };
  xhr.send();
}

function exibirDadosConsulta(dados) {
  document.getElementById("numero").value = dados.numero;
  document.getElementById("nome").value = dados.nome;
  document.getElementById("telefone").value = dados.telefone;
  document.getElementById("valor").value = dados.valor;
}

function habilitarEdicao() {
  document.getElementById("nome").readOnly = false;
  document.getElementById("telefone").readOnly = false;
  document.getElementById("valor").readOnly = false;
  document.getElementById("btn-salvar").style.display = "block";
}

function salvarEdicao() {
  var numero = document.getElementById("numero").value;
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var valor = document.getElementById("valor").value;

  var data = {
    numero: numero,
    nome: nome,
    telefone: telefone,
    valor: valor
  };

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "/rifa/atualizar/" + numero, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("Cadastro atualizado com sucesso!");
        location.reload();
      } else {
        alert("Erro ao atualizar: " + xhr.statusText);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}

function deletarUsuario() {
  var numero = document.getElementById("numero").value;
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", "/rifa/deletar/" + numero, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("Cadastro deletado com sucesso!");
        fecharPopup();
        recarregarPaginaPrincipal();
      } else {
        alert("Erro ao deletar: " + xhr.statusText);
      }
    }
  };
  xhr.send();
}

function fecharPopup() {
  window.close();
}

function recarregarPaginaPrincipal() {
  window.opener.location.reload();
}

// Extrai o número do parâmetro da URL
var numeroSelecionado = window.location.search.substr(1).split("=")[1];
consultarUsuario(numeroSelecionado);