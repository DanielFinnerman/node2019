'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hallo from node server');
});

app.get('/demo', (req, res) => {
	res.send('Hallo from demo');
});

app.listen(3000);