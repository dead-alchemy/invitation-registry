const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended: true}));
app.use(require("cors")());
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

require("../api/routes/invitation.js")(app);

app.listen(4000, () => {
	console.log("Server is running on port 4000.");
});
