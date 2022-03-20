/*
 Group Name: Modern Developers
Student Name - Student ID
1. Meetkumar Patel - 301220141
2. Prit Patel - 301219548
3. Kinjalkumari Dhimmar - 301239901
4. Pratiksinh Makwana - 301219863
5. Sohyeon Song - 301145311
*/


let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let flash = require('connect-flash');
let passport = require('passport');



//get the route modules
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let inventoryRouter = require('../routes/inventory');

let surveyRouter = require('../routes/survey');
let questionsRouter = require('../routes/questions');
let answerRouter = require('../routes/answer');




let app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use(express.static(path.join(__dirname, '../views')));


// Sets up passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory', inventoryRouter);



app.use('/survey-list', surveyRouter);
app.use('/survey-view', questionsRouter);
app.use('/survey-answer', answerRouter);


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
