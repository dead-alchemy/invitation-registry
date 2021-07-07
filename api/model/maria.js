const mariadb = require("mariadb");
require("dotenv").config();

const pool = mariadb.createPool({
	host: process.env.API_DEV_HOST,
	user: process.env.API_DEV_USER,
	password: process.env.API_DEV_PASS,
	connectionLimit: 5,
});
