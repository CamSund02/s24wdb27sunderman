

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var Gizmo = require("./models/gizmo");

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Gizmo.deleteMany();
  let instance1 = new Gizmo({gizmo_name:"camera", functionality:'take pictures', price:59.99});
  instance1.save().then(doc=>{console.log("First object saved")}).catch(err=>{console.error(err)});
  
  let instance2 = new Gizmo({gizmo_name:"remote", functionality:'control tv',price:14.99});
  instance2.save().then(doc=>{console.log("Second object saved")}).catch(err=>{console.error(err)});
  
  let instance3 = new Gizmo({gizmo_name:"speaker", functionality:'play music',price:29.99});
  instance3.save().then(doc=>{console.log("Third object saved")}).catch(err=>{console.error(err)});
}
let reseed = true;
if (reseed) {recreateDB();}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gizmoRouter = require('./routes/gizmo');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gizmo', gizmoRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', pickRouter)
app.use('/resource', resourceRouter)

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