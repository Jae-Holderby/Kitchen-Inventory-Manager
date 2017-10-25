exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM food_type; ALTER SEQUENCE food_type_id_seq RESTART WITH 6;')

  .then(() => {

    let foodTypes = [{
      id: 1,
      name: 'proteins'
    }, {
      id: 2,
      name: 'fruits'
    }, {
      id: 3,
      name: 'vegetables'
    }, {
      id: 4,
      name: 'spices'
    }, {
      id: 5,
      name: 'miscellaneous'
    }];

    return knex('food_type').insert(foodTypes);
  });
};
