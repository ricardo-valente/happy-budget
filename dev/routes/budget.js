import express from 'express'
import env from '../../config'

const router = express.Router();
router.get('/', (req, res, next) => {
  res.render('index')
});

module.exports = router;
