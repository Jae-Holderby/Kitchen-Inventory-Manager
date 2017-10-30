const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.post('/', function(req, res, next) {
  let body = req.body
  queries.addIngredient(body)
  .then((newIngredient) => {
    res.json(newIngredient[0])
  });
});

module.exports = router;
