const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};
// Selecionando o botão corretamente usando a classe 'download-btn'
const button = document.querySelector(".download-btn");

button.addEventListener("click", () => {
  button.classList.add("active"); // Adiciona a classe 'active' ao botão quando ele é clicado
});
