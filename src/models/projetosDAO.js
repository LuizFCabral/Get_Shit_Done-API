const db = require("./db");

const getALL = async () => {
	const con = await db.conectar();
	const [projetos] = await con.execute("SELECT * FROM projeto");
	return projetos;
};

const createProjeto = async (projeto) => {
	const con = await db.conectar();

	const query =
		"insert into projeto (manager_id, nome, descricao, aparencia) values(?, ?, ?, ?)";
	const values = [
		projeto.manager_id,
		projeto.nome,
		projeto.descricao,
		projeto.aparencia,
	];

	const [createProjeto] = await con.execute(query, values);
	return {
		affectedRows: createProjeto.affectedRows,
		insertId: createProjeto.insertId,
	};
};

const deleteProject = async (id) => {
	const con = await db.conectar();

	const query = "delete from projeto where id = ?";

	const [deleteProjeto] = await con.execute(query, [id]);
	return { affectedRows: deleteProjeto.affectedRows };
};

const updateProject = async (projeto) => {
	const con = await db.conectar();

	const query =
		"update projeto set nome = ?, descricao = ?, aparencia = ? where id = ?";
	const values = [
		projeto.nome,
		projeto.descricao,
		projeto.aparencia,
		projeto.id,
	];

	const [updateProjeto] = await con.execute(query, values);
	return {
		affectedRows: updateProjeto.affectedRows,
		changedRows: updateProjeto.changedRows,
	};
};

const searchPartName = async (parteNome) => {
	const con = await db.conectar();
	const query = `select * from projeto where lower(nome) like '%${parteNome}%'`;
	const [projetos] = await con.execute(query);
	return projetos;
};

module.exports = {
	getALL,
	createProjeto,
	deleteProject,
	updateProject,
	searchPartName,
};
