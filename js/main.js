import '../assets/styles/style.scss';

const navLinks = document.querySelectorAll(".nav-links li");
const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overFlow = document.querySelector(".overflow");
const mobileLinks = document.querySelectorAll(".mobile-links li");


menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu-btn img");
  menuBtn.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  overFlow.classList.toggle("active menu");
  if (menuBtn.classList.contains("active-btn")) {
    icon.src = "./assets/imagenes/icon-close-menu.svg";
  } else {
    icon.src = "./assets/imagenes/icon-menu.svg";
  }

});





