const divisor = document.querySelector(".divisor");
const dado = document.querySelector("#dice");
const advice = document.querySelector("#advice");
const titulo = document.querySelector("#texto");

const maxPalavras = 15;

if (window.innerWidth <= 375) {
  divisor.style.backgroundImage = "url('./assets/pattern-divider-mobile.svg')";
}

function checarString(texto) {
  return texto.split(" ").length;
}

function typewriterEffect(element, text, speed = 50) {
  element.textContent = ""; // Limpa o conteúdo anterior
  let index = 0;

  // Atualiza o texto letra por letra
  const interval = setInterval(() => {
    element.textContent += text[index];
    index++;

    // Para o intervalo quando todas as letras forem exibidas
    if (index >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

function loadAdvice() {
  advice.classList.add("hidden");
  texto.textContent = "";

  adviceApi
    .getAdvice()
    .then((conselho) => {
      if (checarString(conselho.advice) > maxPalavras) {
        return loadAdvice();
      }
      typewriterEffect(texto, `ADVICE #${conselho.id}`, 50);
      setTimeout(() => {
        advice.textContent = `"${conselho.advice}"`;

        advice.classList.remove("hidden");
      }, 800);
    })
    .catch((error) => {
      advice.textContent =
        "Não foi possível carregar o conselho. Tente novamente.";
      console.error("Erro ao carregar o conselho:", error);
    });
}

dado.addEventListener("click", loadAdvice);
loadAdvice();
