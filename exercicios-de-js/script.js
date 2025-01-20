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

// q3
let resposta = confirm(
  "Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?"
);

if (resposta) {
  welcomeMessage.innerHTML = "Ótimo! Nós temos as melhores camas de toda a região!";
} else {
  welcomeMessage.innerHTML = "Que pena! Você parecia ser uma pessoa mais legal";
}

//q4
for (let i = 0; i < 10; i++) {
  console.log("O número atual é o", i);
}

// q5
for (let i = 0; i < 10; i++) {
  console.log(`O dobro do número ${i} é ${i * 2}`);
}
