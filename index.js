'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hallo from node server');
});

app.listen(3000);