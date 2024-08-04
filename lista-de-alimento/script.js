const listaOrdenada = document.getElementById("lista");
const section = document.getElementById("produto");
const nome = document.getElementById("nomeComida");
const valor = document.getElementById("valorComida");

function produto() {
  section.style.display = "flex";
  b1.style.display = "none";
}

count = 5;
function novoProduto() {
  count++;

  let li = `
  <li id="${count}">${nome.value} - <b>R$ ${valor.value}</b></li>
  `;

  listaOrdenada.innerHTML += li;
  section.style.display = "none";
  b1.style.display = "flex";
}
