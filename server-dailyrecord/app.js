var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // import cors

const indexRouter = require('./routes/index');
const authenticationRouter = require('./routes/authentication');
const projectRouter = require('./routes/project');
const dataBaseConnection = require('./models/dataBaseConnection');


var app = express();

app.use(logger('dev'));
app.use(cors()); // use cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/authentication', authenticationRouter);
app.use('/project', projectRouter);



dataBaseConnection.initialize();

module.exports = app;
