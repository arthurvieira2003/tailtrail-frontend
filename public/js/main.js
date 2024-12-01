document.addEventListener("DOMContentLoaded", function () {
  // Inicializar o mapa
  const map = L.map("map").setView(
    [-26.294511078191167, -48.84928738340936],
    13
  );

  // Adicionar camada do OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Função para criar ícone personalizado com Font Awesome
  function createCustomIcon(iconClass, color) {
    const icon = L.divIcon({
      html: `
        <div class="map-pet-icon" style="background-color: white;">
          <i class="${iconClass}" style="font-size: 32px; color: ${color};"></i>
        </div>
      `,
      className: "custom-div-icon",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20],
    });
    return icon;
  }

  // Exemplo de marcadores para os pets com ícones diferentes
  const pets = [
    {
      name: "Rex",
      position: [-26.293639517372117, -48.844607692786404],
      status: "Ativo - Quintal",
      icon: createCustomIcon("fa-solid fa-dog", "#4CAF50"),
    },
    {
      name: "Luna",
      position: [-26.29367322556752, -48.844755469828364],
      status: "Dormindo - Quarto",
      icon: createCustomIcon("fa-solid fa-cat", "#FFA000"),
    },
  ];

  // Adicionar marcadores dos pets ao mapa
  pets.forEach((pet) => {
    const marker = L.marker(pet.position, { icon: pet.icon }).addTo(map);
    marker.bindPopup(`
      <div class="pet-popup">
        <h3>${pet.name}</h3>
        <p>${pet.status}</p>
      </div>
    `);
  });

  // Atualizar localização atual
  function updateCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          map.setView([latitude, longitude], 15);
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    }
  }

  // Atualizar localização inicial
  updateCurrentLocation();
});
