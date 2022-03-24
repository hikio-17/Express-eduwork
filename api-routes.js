//import express routes
const router = require('express').Router();

//Set default api respons
router.get("/", (req, res) => {
	res.send({
		status : " API its Working ",
		message : "Welcome to Data Center Siswa"
	})
})

router.get("/DataSiswa", (req, res) => {
	res.send({
		nama : "Fajri Muhammad Tio",
		gender : "Laki - Laki",
		email : "fajritio376@gmail.com",
		phone : "+62 822 3788 8697",
		id : " "
	})
});

module.exports = router;