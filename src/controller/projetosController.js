const projetoDAO = require("../models/projetosDAO");

const getALL = async (_req, res) => {
	const projetos = await projetoDAO.getALL();

	return res.status(200).json(projetos);
};

const createProjeto = async (req, res) => {
	const projetos = await projetoDAO.createProjeto(req.body);

	return res.status(200).json(projetos);
};

const deleteProjeto = async (req, res) => {
	const { id } = req.params;

	const projetos = await projetoDAO.deleteProject(id);

	return res.status(200).json(projetos);
};

const updateProjeto = async (req, res) => {
	const projetos = await projetoDAO.updateProject(req.body);

	return res.status(200).json(projetos);
};

module.exports = {
	getALL,
	createProjeto,
	deleteProjeto,
	updateProjeto,
};
