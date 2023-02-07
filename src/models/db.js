const mysql = require("mysql2/promise");

const conectar = async () => {
	if (global.conexao && global.conexao.state != "disconected")
		return global.conexao;
	const con = mysql.createConnection(
		`mysql://root:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`
	);
	global.conexao = con;
	return con;
};

module.exports = { conectar };
