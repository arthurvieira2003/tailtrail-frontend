const express = require("express");
const { apiController } = require("../controllers/api.controller");

const router = express.Router();

router.post("/getPetData", apiController.getPetData);
router.get("/petUpdates", apiController.petUpdates);

module.exports = router;
