const sequelize = require("../config/database");
require("../models");

async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");

    await sequelize.sync({ alter: true, force: false });
    console.log("Modelos sincronizados com o banco de dados.");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
}

module.exports = initDatabase;
