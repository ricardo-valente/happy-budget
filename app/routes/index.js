'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', function (req, res, next) {
  res.render('index', {
    title: _config2.default.title,
    author: _config2.default.author,
    income_fields: _config2.default.income_fields
  });
});

router.post('/submit', function (req, res, next) {

  res.redirect('/');
});

module.exports = router;