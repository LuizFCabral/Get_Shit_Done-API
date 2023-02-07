const userDAO = require("../models/usuarioDAO");

const getALL = async (_req, res) => {
	const usuarios = await userDAO.getALL();

	return res.status(200).json(usuarios);
};

const createUser = async (req, res) => {
	const usuarios = await userDAO.createUser(req.body);

	return res.status(200).json(usuarios);
};

module.exports = {
	getALL,
	createUser,
};
