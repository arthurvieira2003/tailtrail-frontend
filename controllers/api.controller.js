const { apiService } = require("../services/api.service");
const { locationService } = require("../services/location.service");

let clients = new Set();

const apiController = {
  petUpdates: (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Access-Control-Allow-Origin", "*");

    clients.add(res);

    req.on("close", () => clients.delete(res));
  },

  getPetData: async (req, res) => {
    try {
      const response = await apiService.getPetData(req.body);
      const locations = await locationService.getLocation(req.body);
      const data = { response, locations };

      // Enviar dados para todos os clientes conectados
      clients.forEach((client) => {
        client.write(`data: ${JSON.stringify(data)}\n\n`);
      });

      res.json(data);
    } catch (error) {
      console.error("Erro no controller:", error);
      res.status(500).json({ error: "Erro ao processar a requisição" });
    }
  },
};

module.exports = { apiController };
