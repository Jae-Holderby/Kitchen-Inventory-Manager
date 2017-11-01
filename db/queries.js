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
  getIngredients: function(){
    return knex('ingredient')
  },
  getRecipeById: function(recipe_id){
    return knex('recipe')
    .select('id', 'name', 'selected')
    .where('recipe.id', recipe_id).first()
  },
  getIngredientsByRecipeId: function(recipe_id){
    return knex('ingredient')
    .select('ingredient.id as ingredient_id', 'ingredient.food_id as food_id','food.name as ingredient', 'ingredient.quantity as quantity')
    .innerJoin('food', 'food.id', 'ingredient.food_id')
    .where('recipe_id', recipe_id)
  },
  getMemberById: function(member_id){
    return knex('member')
    .where('id', member_id)
  },
  addRecipe: function(body){
    return knex('recipe')
    .insert(body).returning('*')
  },
  editRecipe: function(recipe_id, edit){
    return knex('recipe').where('id', recipe_id)
    .update(edit).returning('*')
  },
  deleteRecipe: function(id) {
    return knex('recipe').where('id', id).del()
  },
  addIngredient: function(body){
    return knex('ingredient')
    .insert(body).returning('*')
  },
  addMember: function(body){
    return knex('member')
    .insert(body).returning('*')
  },
  getMembers: function(){
    return knex('member').select('*')
  },
  editIngredient: function(ingredient_id, edit){
    return knex('ingredient').where('id', ingredient_id)
    .update(edit).returning('*')
  },
  deleteIngredient: function(id) {
    return knex('ingredient').where('id', id).del()
  },
  newMemebersFoods: function(member_id){
    return [{
      name: 'chicken thighs',
      quantity: 0,
      food_type_id: 1,
      member_id: member_id
    }, {
      name: 'sweet onions',
      quantity: 0,
      food_type_id: 3,
      member_id: member_id
    }, {
      name: 'sweet potatoes',
      quantity: 0,
      food_type_id: 3,
      member_id: member_id
    }, {
      name: 'milk',
      quantity: 0,
      food_type_id: 5,
      member_id: member_id
    }, {
      name: 'salmon steaks',
      quantity: 0,
      food_type_id: 1,
      member_id: member_id
    }, {
      name: 'almond butter',
      quantity: 0,
      food_type_id: 5,
      member_id: member_id
    }, {
      name: 'avocados',
      quantity: 0,
      food_type_id: 2,
      member_id: member_id
    }, {
      name: 'gala apples',
      quantity: 0,
      food_type_id: 2,
      member_id: member_id
    }, {
      name: 'cinnomon',
      quantity: 0,
      food_type_id: 4,
      member_id: member_id
    }, {
      name: 'cumin',
      quantity: 0,
      food_type_id: 4,
      member_id: member_id
    }]
  }
}
