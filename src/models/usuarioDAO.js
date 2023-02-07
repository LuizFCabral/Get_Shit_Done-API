const db = require("./db");

const getALL = async () => {
	const con = await db.conectar();
	const [usuarios] = await con.execute("SELECT * FROM usuario");
	return usuarios;
};

const createUser = async (usuario) => {
	const con = await db.conectar();
	const user = usuario;

	const query =
		"insert into usuario (nome, email, senha, telefone) values(?, ?, ?, ?)";
	const values = [user.nome, user.email, user.senha, user.telefone];

	const [createUser] = await con.execute(query, values);
	return {
		affectedRows: createUser.affectedRows,
		insertId: createUser.insertId,
	};
};

module.exports = {
	getALL,
	createUser,
};
