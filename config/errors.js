'use strict';

function errors(app) {

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    /*eslint-disable no-unused-vars */
    app.use(function(err, req, res, next) {
      /*eslint-enable no-unused-vars */
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  /*eslint-disable no-unused-vars */
  app.use(function(err, req, res, next) {
    /*eslint-enable no-unused-vars */
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {}
    });
  });

}

module.exports = errors;
