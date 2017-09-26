
exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM recipe; ALTER SEQUENCE recipe_id_seq RESTART WITH 2;')

  .then(() => {

    let recipes = [{
      id: 1,
      name: 'Chicken Thighs with Sweet Potatoes',
    }];

    return knex('recipe').insert(recipes);
  });
};
