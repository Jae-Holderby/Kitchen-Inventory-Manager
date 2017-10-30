exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM food; ALTER SEQUENCE food_id_seq RESTART WITH 11;')

  .then(() => {

    let foods = [{
      id: 1,
      name: 'chicken thighs',
      quantity: 8,
      food_type_id: 1,
      member_id: 1
    }, {
      id: 2,
      name: 'sweet onions',
      quantity: 1,
      food_type_id: 3,
      member_id: 1
    }, {
      id: 3,
      name: 'sweet potatoes',
      quantity: 4,
      food_type_id: 3,
      member_id: 1
    }, {
      id: 4,
      name: 'milk',
      quantity: 3,
      food_type_id: 5,
      member_id: 1
    }, {
      id: 5,
      name: 'salmon steaks',
      quantity: 4,
      food_type_id: 1,
      member_id: 1
    }, {
      id: 6,
      name: 'almond butter',
      quantity: 1,
      food_type_id: 5,
      member_id: 1
    }, {
      id: 7,
      name: 'avocados',
      quantity: 4,
      food_type_id: 2,
      member_id: 1
    }, {
      id: 8,
      name: 'gala apples',
      quantity: 9,
      food_type_id: 2,
      member_id: 1
    }, {
      id: 9,
      name: 'cinnomon',
      quantity: 1,
      food_type_id: 4,
      member_id: 1
    }, {
      id: 10,
      name: 'cumin',
      quantity: 1,
      food_type_id: 4,
      member_id: 1
    }];

    return knex('food').insert(foods);
  });
};
