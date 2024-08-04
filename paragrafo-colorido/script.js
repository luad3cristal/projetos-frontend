const input = document.getElementById("cor");
const input1 = document.getElementById("cor1");

input.addEventListener("input", () => {
  let cor = input.value;

  document.getElementById("p1").style.backgroundColor = cor;
});

input1.addEventListener("input", () => {
  let cor = input1.value;

  document.getElementById("p2").style.backgroundColor = cor;
});
