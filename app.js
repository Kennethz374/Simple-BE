const express = require("express");
const bodyParser = require("body-parser"); // a middleware
//
const experienceRoutes = require("./routes/experience-route");
const referenceRoutes = require("./routes/project-route");

const PORT = 5000;

const app = express();

app.use("/api/experience", experienceRoutes);
app.use("/api/reference", referenceRoutes);

app.listen(PORT, () => {
	console.log("==========Listening on Port", PORT, "=================");
});
