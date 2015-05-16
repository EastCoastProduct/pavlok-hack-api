'use strict';

function status(req, res) {
  res.status(200).json({message: 'Online'});
}

module.exports = status;
