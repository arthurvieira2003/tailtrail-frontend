document.addEventListener("DOMContentLoaded", function () {
  // Animação dos cards ao carregar
  const cards = document.querySelectorAll(".alert-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Filtros
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Aqui você pode adicionar a lógica de filtro dos alertas
    });
  });

  // Botões de ação
  document.querySelectorAll(".btn-resolve").forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".alert-card");
      card.classList.add("animate__fadeOutRight");
      setTimeout(() => {
        card.remove();
      }, 500);
    });
  });
});
