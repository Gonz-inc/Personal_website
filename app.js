const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routes to the different pages. 
const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const handels = require('hbs');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));

// HBS partial register partial. /Volumes/Extreme SSD/Projects/Portfolio/app_server/views/partials
handels.registerPartials(path.join(__dirname, 'app_server', 'views/partials'))
handels.registerPartials(path.join(__dirname, 'app_server', 'views/layouts'))

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Here we use bootstrap
app.use('/css', express.static(path.join(__dirname, 'public', 'stylesheets')));

//Here the bootstrap js file is used
app.use('/js', express.static(path.join(__dirname, 'public', 'javascripts')));
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

module.exports = app;
