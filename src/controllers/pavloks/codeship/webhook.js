'use strict';

var pavlok = require('pavlokjs');

function webhook(req) {
  console.log("Boom!");
  var id = req.params.id;
  // var type = req.params.type;
  var strength = req.params.strength;

  pavlok.init({objectId: id});

  pavlok.shock(strength);

}

module.exports = webhook;
