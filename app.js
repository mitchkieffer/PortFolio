
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
 
//Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://mkieffer:Aspenparks12@cluster0.t6jua.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


var indexRouter = require('./routes/index');
//Import Routes
const getInfo = require('./routes/getinfo');
const getProjects = require('./routes/getProjects');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/getinfo', getInfo);
app.use('/getProjects', getProjects);


module.exports = app;
