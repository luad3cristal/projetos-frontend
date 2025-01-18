// q1
const nome = document.querySelector("#nome");
const welcomeMessage = document.querySelector("#welcomeMessage");

const welcome = (event) => {
  event.preventDefault();
  welcomeMessage.innerHTML = `Seja bem vindo(a) ${nome.value}!`;
};

// q2
let boletoPago = false;
boletoPago
  ? console.log("O boleto está pago")
  : console.log("O boleto não está pago");
