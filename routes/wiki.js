const router = require('express').Router();
//const client = require('../models');
const addPage = require('../views/addPage');
//const { wikiPage } = require('../views');
const { Page } = require('../models')

router.get('/', (req, res, next) => {
  res.send('go to get wiki')
})

router.post('/', async (req, res, next) => {
  
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content
    });
  res.redirect('/');
  } catch (error) {
    console.error(error);
  }
  console.log("NAME"+req.body.name);
  // res.send('go to post wiki')
})

router.get('/add', (req, res, next) => {
  //res.send('Hello world');
  res.send(addPage());
})

function generateSlug(title){
  return title.replace(,'_');
}

module.exports = router;
