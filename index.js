/* MENU OPEN-CLOSE */

const menuOpenButton = document.getElementById("menu-open-button");
const menuHamburger = document.getElementById("hamburger-menu");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click", function () {
  menuHamburger.classList.add("is-open");
});

menuCloseButton.addEventListener("click", function () {
  menuHamburger.classList.remove("is-open");
});

const modalOpenButton = document.getElementById("modal-open-button");
const modalMain = document.getElementById("modal-main");
const modalCloseButton = document.getElementById("modal-close-button");

modalOpenButton.addEventListener("click", function () {
  modalMain.classList.add("is-open");
});

modalCloseButton.addEventListener("click", function () {
  modalMain.classList.remove("is-open");
});