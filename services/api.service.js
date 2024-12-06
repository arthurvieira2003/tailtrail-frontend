const axios = require("axios");

const apiService = {
  getPetData: async (body) => {
    try {
      const formattedData = body.map((location) => ({
        latitude: location.latitude,
        longitude: location.longitude,
      }));

      const response = await axios.post(
        `http://148.113.172.140:8080/dadosGPS`,
        formattedData
      );

      if (response.data && response.data.processed) {
        return response.data;
      }

      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.processed
      ) {
        return error.response.data;
      }
      console.error("Erro na requisição:", error.message);
      throw error;
    }
  },
};

module.exports = { apiService };
