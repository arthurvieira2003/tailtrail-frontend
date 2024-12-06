document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView(
    [-26.294511078191167, -48.84928738340936],
    13
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Conectar ao SSE endpoint
  const eventSource = new EventSource(
    "http://148.113.172.140:3443/api/petUpdates"
  );

  eventSource.onmessage = function (event) {
    const data = JSON.parse(event.data);
    updateMapAndAlerts(data);
  };

  eventSource.onerror = function (error) {
    console.error("Erro na conexão SSE:", error);
    eventSource.close();
  };

  function updateMapAndAlerts(data) {
    // Atualizar o timestamp
    const lastUpdateElement = document.querySelector(".last-update span");
    const now = new Date();
    const formattedDate = now.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    lastUpdateElement.textContent = `Última atualização: ${formattedDate}`;

    // Criar ícone personalizado do Font Awesome
    const dogIcon = L.divIcon({
      html: '<i class="fa-solid fa-dog" style="color: #4caf50; font-size: 24px;"></i>',
      className: "custom-div-icon",
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    // Limpar marcadores e linhas anteriores
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    const coordinates = data.locations.locations.map((loc) => loc.position);
    const polyline = L.polyline(coordinates, {
      color: "#FF4444",
      weight: 3,
      opacity: 0.7,
    }).addTo(map);

    // Usar o ícone personalizado nos marcadores
    coordinates.forEach((position, index) => {
      const marker = L.marker(position, { icon: dogIcon }).addTo(map);
      marker.bindPopup(`Ponto ${index + 1}`);
    });

    map.fitBounds(polyline.getBounds());

    if (!data.response.is_safe) {
      const speedKmh = data.response.speeds.map((s) => (s * 3.6).toFixed(1));
      Swal.fire({
        title: "Alerta de Anomalia!",
        html: `
          <div class="alert-details">
            <p><strong>${data.response.message}</strong></p>
            <p>️ Distância total: ${(
              data.response.total_distance / 1000
            ).toFixed(2)}km</p>
            <p>⚡ Velocidades detectadas: ${speedKmh.join(", ")} km/h</p>
            ${
              data.response.safety_flags.speed_exceeded
                ? "<p>⚠️ Velocidade excedida detectada</p>"
                : ""
            }
            ${
              data.response.safety_flags.distance_anomaly
                ? "<p>⚠️ Anomalia de distância detectada</p>"
                : ""
            }
            ${
              data.response.safety_flags.teleportation_detected
                ? "<p>⚠️ Possível teletransporte detectado</p>"
                : ""
            }
          </div>
        `,
        icon: "warning",
        confirmButtonText: "Entendi",
        confirmButtonColor: "#FF4444",
      });
    }
  }
});
