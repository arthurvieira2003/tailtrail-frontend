const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/device.controller");

router.post("/", deviceController.createDeviceController);
router.get("/:id", deviceController.getDeviceByIdController);
router.put("/:id", deviceController.updateDeviceController);
router.delete("/:id", deviceController.deleteDeviceController);

module.exports = router;
