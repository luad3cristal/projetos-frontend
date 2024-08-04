const loading = document.querySelector("#loading");
const link = document.querySelector("#link");
const bg = document.querySelector("#bg");

let load = 0;

let intervalo = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(intervalo);
  }

  loading.innerText = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  link.style.opacity = scale(load, 100, 80, 1, 0);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
