const locationService = {
  getLocation: async (coordinates) => {
    try {
      // Aqui você pode processar os dados das coordenadas
      // antes de enviar para seu frontend
      const processedLocations = coordinates.map((coord) => ({
        position: [coord.latitude, coord.longitude],
        timestamp: new Date().toISOString(),
      }));

      return {
        success: true,
        locations: processedLocations,
        totalPoints: coordinates.length,
        lastUpdate: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Erro ao processar localizações:", error);
      throw error;
    }
  },
};

module.exports = { locationService };
