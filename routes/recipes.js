const express = require('express');
const router = express.Router();
const queries = require('../db/queries')


router.get('/', function(req, res, next) {
  queries.getFood()
  .then((items) => {

    res.json({foods: items})
  });
});
