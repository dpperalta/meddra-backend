const express = require('express');

const app = express();

const medDRARoute = require('./medDRA');
const apiRoute = require('./api');

app.use('/api/meddra', medDRARoute);
app.use('/api/umc', apiRoute);

module.exports = app;