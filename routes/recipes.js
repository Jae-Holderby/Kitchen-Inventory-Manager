const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/:id', function(req, res, next) {
    let recipe_id = req.params.id;
    let ingredients = {}
  queries.getIngredientsByRecipeId(recipe_id)
  .then((ingredient) => {
    ingredients = ingredient

  })
  .then(() => {
    queries.getRecipeById(recipe_id)
    .then(recipe => {
      let name = recipe.name
      let data = {name, ingredients}
      res.json({recipe: data})
    })

  })

});



module.exports = router;
