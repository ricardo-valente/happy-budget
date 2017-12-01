import config from '../../config'
const { Pool, Client } = require('pg')

exports.pool = new Pool({
  connectionString: config.databaseUrl,
})
exports.client = new Client({
  connectionString: config.databaseUrl,
})
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
