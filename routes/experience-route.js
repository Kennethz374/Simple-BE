const express = require("express");

const router = express.Router(); // get us a special object that we can access middleware for routing

const DUMMY_EXP = [
	{
		id: 1,
		organization: "Lighthouse Labs",
		image: "https://i.ibb.co/3MR7txT/lighthouselabs.jpg",
		desc:
			" Lighthouse Labs full-time programs: 12 weeks, 12 hours a day; the most intensive, immersive, accelerated courses; Main stacks includes HTML, CSS, REACT, RUBY&RAIL, CYPRESS, pgSQL",
		date: "2020",
	},
	{
		id: 2,
		organization: "FLIR IIS",
		image: "https://i.ibb.co/51GvXmL/FLIR-Systems-Logo-wine.png",
		desc:
			"Current | Started working as Production Team Lead in FLIR IIS - major responsibilies includes: training new operators to do testing, optical assembly, soldering; help manager to achieve production schedule; Solving minor technical issues",
		date: "2016 - Current",
	},
	{
		id: 3,
		organization: "Point Grey Research",
		image: "https://i.ibb.co/QMC4FDC/xjigzmyc10ivj3em6kzd.png",
		desc: `Started working as a testing operator in PGR - a developer of machine vision cameras for use in industrial, retial. mapping and other advanced imaging applications. Major task is to test all kinds of cameras manufacuring company.`,
		date: "2014",
	},
	{
		id: 4,
		organization: "Simon Fraser University",
		image: "https://i.ibb.co/HYmr2wB/SFU.png",
		desc: "Graduated with a Bachelor degree in Economics",
		date: "2013",
	},
];

router.get("/:eid", (req, res, next) => {
	const experienceId = req.params.eid; //eid is whatever enter in the path
	res.json({ message: DUMMY_EXP });
});

module.exports = router;
