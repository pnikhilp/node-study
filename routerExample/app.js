var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser') 
var logger = require('morgan');

const mogoose = require('mongoose')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  //res.render('index')
});
require('./routes')(app);

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


app.get('/user_details', function(req, response, next) {
console.log('-----request----')
  response.status(200).json({
    name:'foo'
  })

});

function handleError(res,err){
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })

  }
  return res.status(400).json(err)
}

//app.post('/')


// app.listen(9000, (error) => {
//   console.log("Listening on 9000");
// });

module.exports = app;
