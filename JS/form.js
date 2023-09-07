var botaoAdiciona = document.querySelector("#adiciona-contato");

botaoAdiciona.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");
  var contato = obtemContato(form);

  var erros = validaContato(contato);

  if (erros.length > 0) {
    exibeMensagemErro(erros);
    return;
  }

  adicionaContato(contato);

  form.reset();
  var mensagemErro = document.querySelector("#mensagens-erro");
  mensagemErro.innerHTML = "";
});

function adicionaContato(contato) {
  var contatoTr = montaTr(contato);
  var tabela = document.querySelector(".tabela");
  tabela.appendChild(contatoTr);
}

function exibeMensagemErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemContato(form) {
  var contato = {
    nome: form.nome.value,
    numero: form.numero.value,
  };

  return contato;
}

function montaTr(contato) {
  var contatoTr = document.createElement("tr");
  contatoTr.classList.add("contato");

  contatoTr.appendChild(montaTd(contato.nome, "info-nome"));
  contatoTr.appendChild(montaTd(contato.numero, "info-numero"));

  return contatoTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaContato(contato) {
  var erros = [];

  if (!validaNome(contato.nome)) {
    erros.push("O nome não pode ser em branco!");
  }

  if (!validaNumero(contato.numero)) {
    erros.push("O número não pode ser em branco!");
  }

  return erros;
}
