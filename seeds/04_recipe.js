exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM recipe; ALTER SEQUENCE recipe_id_seq RESTART WITH 5;')

  .then(() => {

    let recipes = [{
      id: 1,
      name: 'chicken with sweet potatoes',
      member_id: 1,
      selected: false
    }, {
      id: 2,
      name: 'guacamole',
      member_id: 1,
      selected: false
    }, {
      id: 3,
      name: 'roast chicken',
      member_id: 1,
      selected: false
    }, {
      id: 4,
      name: 'turkey burgers',
      member_id: 1,
      selected: false
    }];

    return knex('recipe').insert(recipes);
  });
};
