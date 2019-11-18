'use strict';

const express = require('express');
const connection = require('./model/db.js');
const app = express();

app.use(express.static('public'));

app.get('/animals', async(req, res) => {
	try {
		const [results, fields] = await connection.query('SELECT * FROM animal');
		console.log(results);
		console.log(fields);
		res.json(results);
	} catch(e) {
		console.log(e);
		res.send('db error:(');
	}	
});
app.get('/animal', async(req, res) => {
	console.log(req.query);
	//res.send(`query parameteres? ${res.query}`);
	try {
		const[results] = await connection.query('SELECT * FROM animal WHERE name LIKE ?', [req.query.name]);
			
			//;, [req.query.id]);
		res.json(results);
	} catch(e) {
		res.send(`db error ${e}`);
	}
});
		

app.get('/demo', (req, res) => {
	res.send('Hallo from demo');
});

app.listen(3000, () => {
	console.log('server start');
});