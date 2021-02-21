const express = require("express");
const bodyParser = require("body-parser"); // a middleware

const PORT = 5000;

const app = express();

app.listen(PORT, () => {
	console.log("==========Listening on Port", PORT, "=================");
});
