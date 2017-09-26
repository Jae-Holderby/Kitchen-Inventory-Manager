
exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM ingredient; ALTER SEQUENCE ingredient_id_seq RESTART WITH 4;')

  .then(() => {

    let ingredients = [{
      id: 1,
      recipe_id: 1,
      inventory_id: 1
    }, {
      id: 2,
      recipe_id: 1,
      inventory_id: 3
    }, {
      id: 3,
      recipe_id: 1,
      inventory_id: 9
    }];

    return knex('ingredient').insert(ingredients);
  });
};
