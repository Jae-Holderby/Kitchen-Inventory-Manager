exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM ingredient; ALTER SEQUENCE ingredient_id_seq RESTART WITH 12;')

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
    }];

    return knex('ingredient').insert(ingredients);
  });
};
