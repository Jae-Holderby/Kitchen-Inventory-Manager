exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM ingredient; ALTER SEQUENCE ingredient_id_seq RESTART WITH 2;')

  .then(() => {

    let ingredients = [{
      id: 1,
      recipe_id: 1,
      food_id: 1,
      quantity: 8
    }, {
      id: 2,
      recipe_id: 1,
      food_id: 3,
      quantity: 2
    }];

    return knex('ingredient').insert(ingredients);
  });
};
