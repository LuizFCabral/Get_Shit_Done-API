const validarBody = (req, res, next) => {
	const { body } = req;

	if (req.method === "POST") {
		if (body.manager_id === undefined || body.manager_id === "") {
			return res.status(400).json({
				message: 'The field "manager_id" is required and cannot be empty.',
			});
		}
	}
	if (req.method === "PUT") {
		if (body.id === undefined || body.id === "") {
			return res.status(400).json({
				message: 'The field "id" is required and cannot be empty.',
			});
		}
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

const validarParams = (req, res, next) => {
	const { params } = req;

	if (isNaN(params.id)) {
		return res.status(403).json({
			message: "The id must be a number.",
		});
	}

	next();
};

module.exports = {
	validarBody,
	validarParams,
};
