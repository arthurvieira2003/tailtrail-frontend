const express = require("express");
const dotenv = require("dotenv");

const initDatabase = require("./database/init");
const userRoutes = require("./routes/user.routes");
const petRoutes = require("./routes/pet.routes");
const alertRoutes = require("./routes/alert.routes");
const deviceRoutes = require("./routes/device.routes");

const app = express();
const port = 3000;

dotenv.config();

app.use("/users", userRoutes);
app.use("/pets", petRoutes);
app.use("/alerts", alertRoutes);
app.use("/devices", deviceRoutes);
async function startServer() {
  await initDatabase();

  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

startServer();
