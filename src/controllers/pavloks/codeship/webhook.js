'use strict';

var request = require('request');

function webhook(req, res) {
  console.log(req.body);

  var id = req.params.id;
  var type = req.params.type;
  var strength = req.params.strength;

  var url = 'https://pavlok.herokuapp.com/api/' + id + '/' + type + '/' + strength;

  request
  .get(url)
  .on('response', function(response) {
    res.status(response.statusCode).json({});
  });
}

module.exports = webhook;
