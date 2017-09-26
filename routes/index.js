const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getInventory()
  .then((items) => {
    res.json(items)
  });
});

router.get('/:id', function(req, res, next) {
  queries.getItemByID(req.params.id)
  .then((item) => {
    res.json(item)
  });
});

module.exports = router;
