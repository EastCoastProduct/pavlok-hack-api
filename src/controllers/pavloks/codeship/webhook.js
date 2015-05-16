'use strict';

var request = require('request');

function webhook(req, res) {
  var id = req.params.id;
  var type = req.params.type;
  var strength = req.params.strength;

  var url = 'https://pavlok.herokuapp.com/api/'
    + id + '/' + type + '/' + strength;

  if (req.body.build.status === 'error') {
    request
    .get(url)
    .on('response', function(response) {
      res.status(response.statusCode).json({});
    });
  } else {
    res.status(200).json({});
  }
}

module.exports = webhook;
