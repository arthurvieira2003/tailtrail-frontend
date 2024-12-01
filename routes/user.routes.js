const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/", userController.createUserController);
router.get("/:email", userController.getUserByEmailController);
router.get("/:id", userController.getUserByIdController);
router.put("/:id", userController.updateUserController);
router.delete("/:id", userController.deleteUserController);

module.exports = router;
