'use strict';

const express = require('express');
const connection = require('./model/db.js');
const app = express();

app.use(express.static('public'));

app.get('/animal', async(req, res) => {
	try {
		const [results, fields] = await connection.query('SELECT * FROM animals');
		console.log(results);
		console.log(fields);
		res.json(results);
	} catch(e) {
		console.log(e);
		res.send('db error:(');
	}
});

app.get('/demo', (req, res) => {
	res.send('Hallo from demo');
});

app.listen(3000, () => {
	console.log('server start');
});