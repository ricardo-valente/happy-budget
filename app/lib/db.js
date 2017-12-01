'use strict';

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('pg'),
    Pool = _require.Pool,
    Client = _require.Client;

exports.pool = new Pool({
  connectionString: _config2.default.databaseUrl
});
exports.client = new Client({
  connectionString: _config2.default.databaseUrl
});
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })