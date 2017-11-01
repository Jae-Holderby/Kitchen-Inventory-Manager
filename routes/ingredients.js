const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/', function(req, res, next) {
  queries.getIngredients()
  .then((ingredients) => {
    res.json({ingredients: ingredients})
  });
});

router.post('/', function(req, res, next) {
  let body = req.body
  queries.addIngredient(body)
  .then((newIngredient) => {
    res.json(newIngredient[0])
  });
});

router.put("/:id", function(req, res, next) {
  let id = req.params.id;
  let edit = req.body;
  queries.editIngredient(id, edit)
    .then((editedIngredient) => {
      res.json(editedIngredient[0])
    });
});

router.delete('/:id', function(req, res, next){
  let id = req.params.id;
  queries.deleteIngredient(id)
  .then((deleted) => {
    res.json({message: "ingredient deleted"})
  });
});

module.exports = router;
