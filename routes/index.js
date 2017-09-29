const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: "index"})
});



module.exports = router;
