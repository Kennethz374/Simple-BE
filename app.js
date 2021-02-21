const express = require("express");
const bodyParser = require("body-parser"); // a middleware
//
const experienceRoutes = require("./routes/experience-route");

const PORT = 5000;

const app = express();

app.use(experienceRoutes);

app.listen(PORT, () => {
	console.log("==========Listening on Port", PORT, "=================");
});
