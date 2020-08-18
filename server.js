const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const nodemon = require('nodemon')


const app = express();
app.use(require('./routes/index'))

app.listen(5000, () => {
	console.log(`Server start`)
})