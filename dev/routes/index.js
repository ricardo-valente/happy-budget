import express from 'express'
const appVars = require('../../config').appVars

const router = express.Router();
router.get('/', (req, res, next) => {
  res.render('index', {
    title: appVars.title,
    author: appVars.author,
    income_fields: appVars.income_fields
  });
});

router.post('/submit', function(req, res, next) {

  res.redirect('/');
});

module.exports = router;
