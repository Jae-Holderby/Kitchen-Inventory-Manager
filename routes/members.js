const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  let body = req.body
  queries.addMember(body)
  .then((newMember) => {
    console.log(newMember[0])
  });
});


module.exports = router;
