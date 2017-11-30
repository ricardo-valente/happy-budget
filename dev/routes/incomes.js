import express from 'express'
import env from '../../config'

const router = express.Router();
router.get('/test', (req, res, next) => {
  rres.render('index')
});

module.exports = router;
