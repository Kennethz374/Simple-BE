const express = require("express");

const router = express.Router(); // get us a special object that we can access middleware for routing

router.get("/", (req, res, next) => {
	console.log("GET REQ IN PLACES");
	res.json({ message: "it works !!!!!!" });
});

module.exports = router;
