const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("navbar-menu_visible");

  if (navbarMenu.classList.contains("navbar-menu_visible")) {
    navbarToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navbarToggle.setAttribute("aria-label", "Abrir menú");
  }
});