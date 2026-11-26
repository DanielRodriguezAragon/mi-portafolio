const pillButtons = document.querySelectorAll(".pill-btn");
const techCards = document.querySelectorAll(".tech-card");

pillButtons.forEach((boton) => {
  boton.addEventListener("click", () => {
    // 1. Cambia el botón iluminado al que acabas de pulsar
    pillButtons.forEach((btn) => btn.classList.remove("active"));
    boton.classList.add("active");

    // 2. Mira qué categoría toca mostrar ("movil", "web", "bbdd" o "herramientas")
    const categoriaElegida = boton.dataset.category;

    // 3. Muestra las tarjetas de esa categoría y esconde las demás
    techCards.forEach((card) => {
      if (card.dataset.category === categoriaElegida) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Cierra el menú automáticamente al pulsar cualquier enlace
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}