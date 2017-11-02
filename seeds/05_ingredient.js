exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM ingredient; ALTER SEQUENCE ingredient_id_seq RESTART WITH 26;')

  .then(() => {

    let ingredients = [{
      id: 1,
      recipe_id: 1,
      food_id: 1,
      quantity: 4
    }, {
      id: 2,
      recipe_id: 1,
      food_id: 3,
      quantity: 2
    }, {
      id: 3,
      recipe_id: 1,
      food_id: 9,
    }, {
      id: 4,
      recipe_id: 2,
      food_id: 2,
      quantity: 1
    }, {
      id: 5,
      recipe_id: 2,
      food_id: 7,
      quantity: 3
    }, {
      id: 6,
      recipe_id: 2,
      food_id: 11,
      quantity: 1
    }, {
      id: 7,
      recipe_id: 2,
      food_id: 13,
      quantity: 1
    }, {
      id: 8,
      recipe_id: 2,
      food_id: 14,
      quantity: 2
    }, {
      id: 9,
      recipe_id: 2,
      food_id: 15,
      quantity: 1
    }, {
      id: 10,
      recipe_id: 2,
      food_id: 10
    }, {
      id: 11,
      recipe_id: 2,
      food_id: 12
    }, {
      id: 12,
      recipe_id: 2,
      food_id: 16
    }, {
      id: 13,
      recipe_id: 2,
      food_id: 17
    }, {
      id: 14,
      recipe_id: 3,
      food_id: 18,
      quantity: 1
    }, {
      id: 15,
      recipe_id: 3,
      food_id: 16
    }, {
      id: 16,
      recipe_id: 3,
      food_id: 19
    }, {
      id: 17,
      recipe_id: 3,
      food_id: 20,
      quantity: 1
    }, {
      id: 18,
      recipe_id: 3,
      food_id: 21
    }, {
      id: 19,
      recipe_id: 4,
      food_id: 22,
      quantity: 3
    }, {
      id: 20,
      recipe_id: 4,
      food_id: 23
    }, {
      id: 21,
      recipe_id: 4,
      food_id: 24,
      quantity: 2
    }, {
      id: 22,
      recipe_id: 4,
      food_id: 2,
      quantity: 1
    }, {
      id: 23,
      recipe_id: 4,
      food_id: 25
    }, {
      id: 24,
      recipe_id: 4,
      food_id: 15,
      quantity: 1
    }, {
      id: 25,
      recipe_id: 4,
      food_id: 16
    }];

    return knex('ingredient').insert(ingredients);
  });
};
