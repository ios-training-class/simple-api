
var express = require('express');
var fs = require('fs');
var config = require('config');
var app = express();
var bodyParser = require('body-parser');
var logger = require('./helpers/logger');
var cors = require('cors');
var errorhandler = require('errorhandler');
var isProduction = process.env.NODE_ENV === 'production';

app.use(cors());

// body parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// import routers
app.use(require('./apis'));

if (!isProduction) {
  app.use(errorhandler());
}

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// start server
var server = app.listen(process.env.PORT || config.get('server.port'), function() {
  var host = server.address().address;
  var port = server.address().port;
  logger.info('Server start at http://%s:%s', '0.0.0.0', process.env.PORT || config.get('server.port'));
});
