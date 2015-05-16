'use strict';

var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.route('/status')
  .get(controllers.utils.status);

router.route('/codeship/:id/:type/:strength')
  .post(controllers.pavloks.codeship.webhook);

// catch all not matched requests
router.route('*')
  .all(controllers.utils.catch404);

module.exports = router;
