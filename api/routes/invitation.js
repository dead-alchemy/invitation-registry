module.exports = (app) => {
	const invitation = require("../service/invitation.js");

	app.get("/api/get_guests", invitation.get_guests);
};
