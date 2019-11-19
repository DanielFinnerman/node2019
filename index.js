'use strict';

const express = require('express');
const connection = require('./model/animals')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.static('public'));

app.get('/animals', async (req, res) => {
	try {
		res.json(await connection.getAll());
	} catch (e) {
		console.log(e);
		res.send('db error :(');
	}
});

app.get('/animal', async (req, res) => {
	console.log(req.query);
	try {
		res.json(await connection.search(req.query.name));
	} catch(e) {
		res.send(`db error`);
	}
});

app.post('/animal', bodyParser.urlencoded({extended: true}), async (req, res) => {
	console.log(req.body);
	try {
		res.json(await connection.insert(req.body.name));
	} catch (e) {
		console.log(e);
		res.send('db error :(');
	}
});

app.get('/', (req, res) => {
	res.send('Hello from Node server!');
});

app.get('/demo', (req, res) => {
	//console.log('req:', req);
	//console.log('res:', res);
	res.send('Hallo from Demo server!');
});

app.listen(port, () => {
	console.log(`Listening from port ${port}`);
});
