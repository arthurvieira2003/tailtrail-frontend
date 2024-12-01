const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet.controller");

router.post("/", petController.createPetController);
router.get("/:id", petController.getPetByIdController);
router.put("/:id", petController.updatePetController);
router.delete("/:id", petController.deletePetController);

module.exports = router;
