var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sqlServer = require('./config/mysql');
var cors = require('cors');
var apiRouter = require('./routes/api');

var app = express();

app.use(cors());
sqlServer.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRouter);


module.exports = app;
