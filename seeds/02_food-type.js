exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM food_type; ALTER SEQUENCE food_type_id_seq RESTART WITH 6;')

  .then(() => {

    let foodTypes = [{
      id: 1,
      name: 'protein'
    }, {
      id: 2,
      name: 'fruit'
    }, {
      id: 3,
      name: 'vegetable'
    }, {
      id: 4,
      name: 'spice'
    }, {
      id: 5,
      name: 'misc'
    }];

    return knex('food_type').insert(foodTypes);
  });
};
