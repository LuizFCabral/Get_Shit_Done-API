const express = require("express");
const router = express.Router();
const userController = require("./controller/usuarioController");
const userMiddleWare = require("./middlewares/usuarioMiddleware");

router.get("/", (_req, res) => res.status(200).send("Rodando!"));
router.get("/user", userController.getALL);
router.post("/user", userMiddleWare.validarBody, userController.createUser);

module.exports = router;
