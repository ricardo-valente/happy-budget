'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appVars = require('../../config').appVars;

var router = _express2.default.Router();
router.get('/', function (req, res, next) {
  res.render('index', {
    title: appVars.title,
    author: appVars.author
  });
});

module.exports = router;