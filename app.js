const bodyParser = require('body-parser');
const express  = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const routes = require('./routes/routes');
app.use('/api/v1',routes);

module.exports = app;