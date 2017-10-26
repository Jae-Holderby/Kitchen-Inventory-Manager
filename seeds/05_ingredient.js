exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM ingredient; ALTER SEQUENCE ingredient_id_seq RESTART WITH 6;')

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
      quantity: 1
    }];

    return knex('ingredient').insert(ingredients);
  });
};
