const express = require("express");
const dotenv = require("dotenv");

const alertRoutes = require("./routes/alert.routes");
const apiRoutes = require("./routes/api.routes");

const app = express();
const port = 3443;

dotenv.config();

app.use(express.json());

app.use("/alerts", alertRoutes);
app.use("/api", apiRoutes);

async function startServer() {
  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

startServer();
