const menu = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");

const displayMenu = () => {
  sidebar.classList.toggle("hidden");
};

menu.addEventListener("click", displayMenu);
