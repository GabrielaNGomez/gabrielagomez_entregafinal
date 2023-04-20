const navToggle = document.querySelector(".nav-toggle");
const navegadorMenu = document.querySelector(".navegador-menu");

navToggle.addEventListener("click", () => {
  navegadorMenu.classList.toggle("navegador-menu_visible");

  if (navegadorMenu.classList.contains("navegador-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
