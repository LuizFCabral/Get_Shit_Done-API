const express = require("express");
const router = express.Router();
const userController = require("./controller/usuarioController");
const projetoController = require("./controller/projetosController");
const userMiddleWare = require("./middlewares/usuarioMiddleware");
const projectMiddleWare = require("./middlewares/projetoMiddleware");

router.get("/", (_req, res) => res.status(200).send("Rodando!"));
router.get("/user", userController.getALL);
router.post("/user", userMiddleWare.validarBody, userController.createUser);

//Rotas Projeto
router.get("/project", projetoController.getALL);
router.get("/project/:partname", projetoController.searchPartName);
router.post(
	"/project",
	projectMiddleWare.validarBody,
	projetoController.createProjeto
);
router.delete(
	"/project/:id",
	projectMiddleWare.validarParams,
	projetoController.deleteProjeto
);
router.put(
	"/project",
	projectMiddleWare.validarBody,
	projetoController.updateProjeto
);

module.exports = router;
