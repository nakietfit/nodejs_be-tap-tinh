var createError = require('http-errors');
//import the express module
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//import body-parser
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var calculate = require('./public/javascripts/calculator');

var app = express();

// view engine setup
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

//configure body-parser for express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var server_first_num;
var server_second_num;
var server_operator;
var server_result_num;
var server_message;

app.post('/', function(req, res) {
    server_first_num = req.body.first_num;
    server_operator = req.body.operator;
    server_second_num = req.body.second_num;

    server_result_num = calculate.calculate(server_first_num, server_second_num, server_operator);

    if (isNaN(parseFloat(server_result_num))) {
      server_message = server_result_num;
      server_result_num = "";
    }
    else {
      server_message = "";
    }

    res.render('index', { first_num: server_first_num, 
      operator: server_operator,
      second_num: server_second_num, 
      result_num: server_result_num,
      message: server_message });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);

module.exports = app;
