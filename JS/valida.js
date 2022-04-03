var contatos = document.querySelectorAll(".contato")

for (var i = 0; i < contatos.length; i++) {
    var contato = contatos[i];

    var tdNome = contato.querySelector(".info-nome");
    var nome = tdNome.textContent;

    var tdNumero = contato.querySelector(".info-numero");
    var numero = tdNumero.textContent;

    var numeroValido = validaNumero(numero);
    var nomeValido = validaNome(nome);

    if (!nomeValido) {
        console.log("Nome invalido!");
        nomeValido = false;
        tdNome.textContent = "Nome invalido!";
        contato.classList.add("contato-invalido");
    }

    if (!numeroValido) {
        console.log("Numero invalido!");
        numeroValido = false;
        tdNumero.textContent = "Número invalido!";
        contato.classList.add("contato-invalido");
    }

}

function validaNome(nome){

    if (nome <= 0){
        return false;
    }else{
        return true;
    }
}

function validaNumero(numero){

    if (numero <= 0){
        return false;
    }else{
        return true;
    }

}

