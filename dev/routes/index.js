import express from 'express'
import config from '../../config'

const router = express.Router();
router.get('/', (req, res, next) => {
  res.render('index', {
    title: config.title,
    author: config.author,
    income_fields: config.income_fields
  });
});

router.post('/submit', function(req, res, next) {
  
  res.redirect('/');
});

module.exports = router;
