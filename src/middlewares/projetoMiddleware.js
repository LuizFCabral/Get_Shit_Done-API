const validarBody = (req, res, next) => {
	const { body } = req;

	if (body.manager_id === undefined || body.manager_id === "") {
		return res.status(400).json({
			message: 'The field "manager_id" is required and cannot be empty.',
		});
	}
	if (body.nome === undefined || body.nome === "") {
		return res
			.status(400)
			.json({ message: 'The field "nome" is required and cannot be empty.' });
	}
	if (body.descricao === undefined) {
		return res.status(400).json({
			message: 'The field "descricao" is required.',
		});
	}
	if (body.aparencia === undefined || body.aparencia === "") {
		return res.status(400).json({
			message: 'The field "aparencia" is required and cannot be empty.',
		});
	}

	next();
};

module.exports = {
	validarBody,
};
