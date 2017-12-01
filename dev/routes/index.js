import express from 'express'
import db from '../lib/db'
const appVars = require('../../config').appVars
const query = require('../../config').queries

db.client.connect()
const router = express.Router()

router.get('/', (req, res, next) => {
  db.client.query(query.all, (err, result) => {
    if (err) {
      throw err
    }
    res.render('index', {
      title: appVars.title,
      author: appVars.author,
      income_fields: appVars.income_fields,
      incomes: result.rows
    })
  })
})

router.post('/submit', function(req, res, next) {
  console.log(req.body)
  db.client.query(query.insert,
    [ req.body.date,
      req.body.name,
      req.body.type,
      req.body.who,
      req.body.amount,
      req.body.category,
      req.body.euroticket,
      req.body.split ],
    (err, result) => {
      if (err) {
        throw err
      }
    }
  )
  res.redirect('/')
})

module.exports = router;
