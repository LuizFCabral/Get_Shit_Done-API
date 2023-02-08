const db = require("./db");

const getALL = async () => {
	const con = await db.conectar();
	const [projetos] = await con.execute("SELECT * FROM projeto");
	return projetos;
};

const createProjeto = async (projeto) => {
	const con = await db.conectar();
	const proj = projeto;

	const query =
		"insert into projeto (manager_id, nome, descricao, aparencia) values(?, ?, ?, ?)";
	const values = [proj.manager_id, proj.nome, proj.descricao, proj.aparencia];

	const [createProjeto] = await con.execute(query, values);
	return {
		affectedRows: createProjeto.affectedRows,
		insertId: createProjeto.insertId,
	};
};

module.exports = {
	getALL,
	createProjeto,
};
