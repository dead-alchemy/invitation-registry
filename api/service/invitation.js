const mariadb = require("mariadb");
require("dotenv").config();

const pool = mariadb.createPool({
	host: process.env.API_DEV_HOST,
	port: process.env.API_DEV_PORT,
	user: process.env.API_DEV_USER,
	password: process.env.API_DEV_PASS,
	database: "wedding",
	connectionLimit: 5,
});

const invitation = function (invitation) {};

invitation.get_guests = async (req, res) => {
	let conn;
	try {
		conn = await pool.getConnection();
		const rows = await conn.query("SELECT * FROM guests");
		res.send(rows); //[ {val: 1}, meta: ... ]
	} catch (err) {
		throw err;
	} finally {
		if (conn) return conn.end();
	}
};

module.exports = invitation;
