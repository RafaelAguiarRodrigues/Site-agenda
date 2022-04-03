var campoFiltro = document.querySelector(".filtro-tabela");

campoFiltro.addEventListener("input", function () {
    var contatos = document.querySelectorAll(".contato");

        if (this.value.length > 0) {
            for (var i = 0; i < contatos.length; i++) {
                var contato = contatos[i];
                var tdNome = contato.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var expressao = new RegExp(this.value, "i");
                if (!expressao.test(nome)) {
                    contato.classList.add("invisivel");
                } else {
                    contato.classList.remove("invisivel");
                }
            }
        } else {
            for (var i = 0; i < contatos.length; i++) {
                var contato = contatos[i];
                contato.classList.remove("invisivel");
            }
        }
    


});