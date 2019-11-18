'use strict';

const express = require('express');
const connection = require('./model/db.js');
const app = express();

app.use(express.static('public'));

app.get('/animal', async(req, res) => {
	try {
		const [results, field] = await connection.query('SELECT * FROM animal',
		function(err, results, fields) {
			console.log(results); // results contains rows returned by server
			console.log(fields); // fields contains extra meta data about results, if available
			res.json(results);
		}
	} catch (e) {
	  console.log(e);
	  res.send('db error');
	}
});

app.get('/demo', (req, res) => {
	res.send('Hallo from demo');
});

app.listen(3000, () => {
	console.log('server start');
});