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

router.post('/', function(req, res, next) {
  let body = req.body
  queries.addItem(body)
  .then((newItem) => {
    res.json(newItem[0])
  });
});

router.put("/:id", function(req, res, next) {
  let id = req.params.id;
  let edit = req.body;
  queries.editItem(id, edit)
    .then((editedItem) => {
      res.json(editedItem[0])
    });
});


module.exports = router;
