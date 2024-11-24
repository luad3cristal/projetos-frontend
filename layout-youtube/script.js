const likeButton = document.querySelector("#likeButton");
const dislikeButton = document.querySelector("#dislikeButton");
const likeImage = document.querySelector("#imageLike");
const dislikeImage = document.querySelector("#imageDislike");
const likeQtd = document.querySelector("#likeQtd");
const dislikeQtd = document.querySelector("#dislikeQtd");

let calcLike;
let calcDislike;

const ligarLike = () => {
  calcLike = 124 + 1;
  likeImage.src = "./assets/thumbs-up.svg";
};

const desligarLike = () => {
  calcLike = 124;
  likeImage.src = "./assets/thumbs-up-outline.svg";
};

const ligarDislike = () => {
  dislikeImage.src = "./assets/thumbs-down.svg";
  calcDislike = 1.0 + 0.1;
};
const desligarDislike = () => {
  dislikeImage.src = "./assets/thumbs-down-outline.svg";
  calcDislike = 1;
};

likeButton.addEventListener("click", () => {
  const currentSrc = likeImage.src.split("/").pop();

  if (currentSrc === "thumbs-up-outline.svg") {
    ligarLike();
    desligarDislike();
  } else {
    desligarLike();
  }
  
  likeQtd.innerHTML = `${calcLike}k`;
  dislikeQtd.innerHTML = `${calcDislike}k`;
});

dislikeButton.addEventListener("click", () => {
  const currentSrc = dislikeImage.src.split("/").pop();
  
  if (currentSrc === "thumbs-down-outline.svg") {
    ligarDislike();
    desligarLike();
  } else {
    desligarDislike();
  }
  
  likeQtd.innerHTML = `${calcLike}k`;
  dislikeQtd.innerHTML = `${calcDislike}k`;
});
