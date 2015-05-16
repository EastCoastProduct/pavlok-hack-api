'use strict';

var pavlok = require('pavlokjs');

var codeship = function(req, res) {
  var id = req.params.id;
  var type = req.params.type;
  var strength = req.params.strength;

  pavlok.init({objectId: id});

  if (req.body.build.status === 'error') {
    pavlok[type](strength);
  } else {
    res.status(200).json({});
  }
};

var zapier = function(req) {
  var id = req.params.id;
  var type = req.params.type;
  var strength = req.params.strength;

  pavlok.init({objectId: id});

  pavlok[type](strength);
};

module.exports = {
  codeship: codeship,
  zapier: zapier
};
