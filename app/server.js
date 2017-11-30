'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _helpers = require('./lib/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('pg'),
    Pool = _require.Pool,
    Client = _require.Client;
// const dbConnectionStr = 'postgresql://' + config.db.user + ':' + config.db.password + '@' + config.db.host + ':5432/' + config.db.name

var app = (0, _express2.default)();
var port = 5000;
var index = require(_path2.default.join(__dirname, 'routes/index'));
var budget = require(_path2.default.join(__dirname, 'routes/budget'));
var hbsOpt = _expressHandlebars2.default.create({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: _path2.default.join(__dirname, 'views/layouts'),
  partialsDir: _path2.default.join(__dirname, 'views/partials'),
  helpers: _helpers2.default
});
var db = _config2.default.db;
var pool = new Pool({
  connectionString: _config2.default.databaseUrl
});
var client = new Client({
  connectionString: _config2.default.databaseUrl
});
client.connect();
pool.query('SELECT NOW()', function (err, res) {
  console.log(err, res);
  pool.end();
});

// pool.query('SELECT * FROM income WHERE id = $1', [1], (err, res) => {
//   if (err) {
//     throw err
//   }
//   console.log('user:', res.rows[0])
// })

app.engine('hbs', hbsOpt.engine);
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

app.use('/', index);
app.use('/budget', budget);

app.listen(process.env.PORT || port, function () {
  return console.log('Example app listening on port 5000!');
});
