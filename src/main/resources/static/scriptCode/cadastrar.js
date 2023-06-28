

// cadastrar usuario
var numeroSelecionado = getParameterByName('numero');
    document.getElementById('numero').value = numeroSelecionado;

    function salvarUsuario() {
        var nome = document.getElementById('nome').value;
        var telefone = document.getElementById('telefone').value;
        var valor = document.getElementById('valor').value;

        var data = {
            numero: numeroSelecionado,
            nome: nome,
            telefone: telefone,
            valor: valor
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/rifa/cadastrar', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert('Salvo com sucesso');
                    fecharPopup();
                    recarregarPaginaPrincipal();
                } else {
                    alert('Erro ao salvar');
                }
            }
        };
        xhr.send(JSON.stringify(data));
    }

    function fecharPopup() {
        window.close();
    }

    function recarregarPaginaPrincipal() {
        window.opener.location.reload();
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

        function converterParaMaiusculas(elemento) {
        elemento.value = elemento.value.toUpperCase();
    }