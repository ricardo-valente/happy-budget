'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
// const dotenv = require('dotenv').config({path: path.join(process.env.PWD, '.env')})

var app = express();
var port = 3000;
// const env = process.env.NODE_ENV

app.get('/', function (req, res) {
  return res.send('Hello World!');
});

app.listen(process.env.PORT || port, function () {
  return console.log('Example app listening on port 5000!');
});
// console.log(env)
