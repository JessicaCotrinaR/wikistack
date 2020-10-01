const router = require('express').Router();
//const client = require('../models');
const addPage = require('../views/addPage');
//const { wikiPage } = require('../views');

router.get('/', (req, res, next) => {
  res.send('go to get wiki')
})

router.post('/', (req, res, next) => {
  res.send('go to post wiki')
})

router.get('/add', (req, res, next) => {
  //res.send('Hello world');
  res.send(addPage());
})

module.exports = router;
