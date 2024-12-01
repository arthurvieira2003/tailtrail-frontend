const express = require("express");
const router = express.Router();
const alertController = require("../controllers/alert.controller");

router.post("/", alertController.createAlertController);
router.get("/:id", alertController.getAlertByIdController);
router.put("/:id", alertController.updateAlertController);
router.delete("/:id", alertController.deleteAlertController);

module.exports = router;
