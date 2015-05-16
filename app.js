'use strict';

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./src/routes');
var errors = require('./config/errors');
var app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// uncomment if you need some static assets served
// app.use(express.static(path.join(__dirname, 'public')));

// set route configuration
app.use(routes);
// include error handlers
errors(app);

module.exports = app;
