const express = require("express");

const router = express.Router();

const FirstQuote = `I have been working in PointGrey/FLIR IIS for the past 20 years and Kenneth Zhang is the most
responsible and capable employee I have ever met. Kenneth started working for FLIR IIS in 2013. In just
the past few years, Kenneth has demonstrated excellent leadership skills, strong learning ability, and
exceptional communication skills. I believe that with his interpersonal skills and charisma, he will be your
most productive employee in the field and he will make some positive impact on your company.

I highly recommend Kenneth Zhang to join your company without reservation. I am very confident that he
will establish productive relationships with you and your staffs and help your company to succeed. There
is way more to talk about Kenneth's amazing achievements over the years in FLIR IIS. Please let me
know if you like to know more about this awesome young man.`;
const SecondQuote = `Kenneth is smart, has strong learning ability and desire. In only two years, he has mastered his hands-on
skills in optical assembly, soldering, programming, testing and even packing, mostly by himself. No one
in production can master these skills in such a short time except Kenneth. Thereafter, he has been
promoted as a production team lead. But he has never stopped learning. Over the years, he has
attended many programs for FLIR IIS, such as the OFA Level 2 and a Soldering Program in California. I
also notice that Kenneth finds interests in Software/Web Development and has taken courses like
Python and coding related programs over the years.`;

const ThirdQuote = `Kenneth is a team player with exceptional communication skills. During the busiest time of the year,
Kenneth always sacrifices his personal time for OT to help with achieving deadlines. He used to come on
the weekend and work till late at night to complete production orders. As a production team leader, he
understands the importance of communication and teamwork more than most of the staff here. He
always provides clear directions and support to his team members and a neat report at the end to his
superiors. I notice that Kenneth has been working under different supervisors and managers. They all
provided excellent feedback about Kenneth. Another important aspect to prove Kenneth is a team player
is that Kenneth has voted as the best employee (with the highest performance ranking) for six
consecutive years by his peers and superiors. Only 5% of the employees in the company would have
such an honor every year and Kenneth is entitled to that every single year since he started working in
FLIR IIS.`;
const reference = [
	{
		id: 1,
		images: "https://i.ibb.co/HYmr2wB/SFU.png",
		name: "William Yu",
		title: "Production Manager",
		quote: FirstQuote,
	},

	{
		id: 2,
		images: "https://i.ibb.co/HYmr2wB/SFU.png",
		name: "Shahil Prasad",
		title: "Senior Operator in FLIR IIS",
		quote: SecondQuote,
	},
	{
		id: 3,
		images: "https://i.ibb.co/HYmr2wB/SFU.png",
		name: "Steven Chan",
		title: "Supervisor",
		quote: ThirdQuote,
	},
];

router.get("/:rid", (req, res, next) => {
	const refId = req.params.rid;
	const ref = reference.find((r) => {
		return r.id == refId;
	});
	res.json({ ref });
});

module.exports = router;
