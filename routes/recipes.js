const express = require('express');
const router = express.Router();
const queries = require('../db/queries')


router.get('/', function(req, res, next) {
  queries.getRecipes()
  .then((recipes) => {
    res.json({recipes: recipes})
  });
});

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
      let id = recipe.id
      let name = recipe.name;
      let selected = recipe.selected;
      let data = {id, name, selected, ingredients}
      res.json({recipe: data})
    })
  })
});

router.put("/:id", function(req, res, next) {
  let id = req.params.id;
  let edit = req.body;
  queries.editRecipe(id, edit)
    .then((editedRecipe) => {
      res.json(editedRecipe[0])
    });
});

router.patch("/:id", function(req, res, next) {
  let id = req.params.id;
  let edit = req.body;
  queries.editRecipe(id, edit)
    .then((editedRecipe) => {
      res.json(editedRecipe[0])
    });
});

router.post('/', function(req, res, next) {
  let body = req.body
  queries.addRecipe(body)
  .then((newRecipe) => {
    res.json(newRecipe[0])
  });
});

router.delete('/:id', function(req, res, next){
  let id = req.params.id;
  queries.deleteRecipe(id)
  .then((deleted) => {
    res.json({message: "Recipe deleted"})
  });
});



module.exports = router;
