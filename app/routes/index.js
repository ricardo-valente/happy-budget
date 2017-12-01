'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('../lib/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appVars = require('../../config').appVars;
var query = require('../../config').queries;

_db2.default.client.connect();
var router = _express2.default.Router();

router.get('/', function (req, res, next) {
  _db2.default.client.query(query.all, function (err, result) {
    if (err) {
      throw err;
    }
    res.render('index', {
      title: appVars.title,
      author: appVars.author,
      income_fields: appVars.income_fields,
      incomes: result.rows
    });
  });
});

router.post('/submit', function (req, res, next) {
  console.log(req.body);
  _db2.default.client.query(query.insert, [req.body.date, req.body.name, req.body.type, req.body.who, req.body.amount, req.body.category, req.body.euroticket, req.body.split], function (err, result) {
    if (err) {
      throw err;
    }
  });
  res.redirect('/');
});

module.exports = router;