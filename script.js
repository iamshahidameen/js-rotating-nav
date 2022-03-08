const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const mainContainer = document.querySelector(".container");

openNav.addEventListener("click", () => mainContainer.classList.add("show-nav"));

closeNav.addEventListener("click", () => mainContainer.classList.remove("show-nav"));