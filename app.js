//import express
const express = require('express');

//inisialisasi express sebagai app
const app = express();

//import module api route;
const apiRouter = require('./api-routes')

//Setting port 
const port = 3000;

//setup default url di root
app.get("/", (req, res) => {
	res.send(
		"<h1>Selamat Datang Di Data Center Siswa Mekar Jaya</h1>"
	);
});

//setup url api to apiRouter
app.use("/api", apiRouter);

//setup resource error
app.use((req, res, next) => {
	res.status(404)
	res.send({
		status: 'Failed',
		message: 'Resource ' + req.orinalUrl + ' Not Found'
	})
})

//launc app with console.info
app.listen(port, () => {
	console.log(`Server running at port : ${port}`)
})