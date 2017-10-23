const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getfood()
  .then((items) => {

    res.json({foods: items})
  });
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  queries.getItemByID(id)
  .then((item) => {
    res.json({data: item})
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

router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  queries.deleteItem(id)
  .then((deleted) => {
    res.json({message: "Item deleted"})
  });
});


module.exports = router;
