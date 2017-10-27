const knex = require('./knex')

module.exports = {
  getFood: function(){
    return knex('food')
    .select('food.id', 'food.name as food', 'food.quantity as quantity', 'food_type.name as food_type', 'member.id as member_id', 'member.name as member_name')
    .innerJoin('food_type', 'food_type.id', 'food.food_type_id')
    .innerJoin('member', 'member.id', 'food.member_id')
  },
  getFoodByID: function(food_id){
    return knex('food')
    .select('food.id', 'food.name as food', 'food.quantity as quantity', 'food_type.name as food_type', 'member.id as member_id', 'member.name as member_name')
    .innerJoin('food_type', 'food_type.id', 'food.food_type_id')
    .innerJoin('member', 'member.id', 'food.member_id')
    .where('food.id', food_id).first();
  },
  addItem: function(body){
    return knex('food')
    .insert(body).returning('*')
  },
  editItem: function(inventory_id, edit){
      return knex('food').where('id', inventory_id).update(edit).returning('*')
  },
  deleteItem: function(id) {
    return knex('food').where('id', id).del()
  },
  getRecipes: function(){
    return knex('recipe')
    .select('recipe.id','recipe.name as recipe', 'recipe.selected', 'member.id as member_id', 'member.name as name')
    .innerJoin('member', 'member.id', 'recipe.member_id')
  },
  getRecipeById: function(recipe_id){
    return knex('recipe')
    .select('name', 'selected')
    .where('recipe.id', recipe_id).first()
  },
  getIngredientsByRecipeId: function(recipe_id){
    return knex('ingredient')
    .select('food.name as ingredient', 'ingredient.quantity as quantity')
    .innerJoin('food', 'food.id', 'ingredient.food_id')
    .where('recipe_id', recipe_id)
  },
  editRecipe: function(recipe_id, edit){
    return knex('recipe').where('id', recipe_id)
    .update(edit).returning('*')
  }
}
