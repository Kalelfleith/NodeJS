var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValitor = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValitor());

//Faz um scan/reconhece do routes
//Inclui isso dentro do servidor (app)
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);


module.exports = app;