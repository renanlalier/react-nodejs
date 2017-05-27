var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var server = require('http').Server(app);
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/poc');

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

server.listen(3000, function(){
  console.log('App no ar ...');
});

module.exports = app;
