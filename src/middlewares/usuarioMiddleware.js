const validarBody = (req, res, next) => {
	const { body } = req;

	if (body.nome === undefined || body.nome === "") {
		return res
			.status(400)
			.json({ message: 'The field "name" is required and cannot be empty.' });
	}
	if (body.email === undefined || body.email === "") {
		return res
			.status(400)
			.json({ message: 'The field "email" is required and cannot be empty.' });
	}
	if (body.senha === undefined || body.senha === "") {
		return res.status(400).json({
			message: 'The field "password" is required and cannot be empty.',
		});
	}
	if (body.telefone === undefined || body.telefone === "") {
		return res
			.status(400)
			.json({ message: 'The field "number" is required and cannot be empty.' });
	}

	next();
};

module.exports = {
	validarBody,
};
