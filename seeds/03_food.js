exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM food; ALTER SEQUENCE food_id_seq RESTART WITH 26;')

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
      quantity: 3,
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
      quantity: 1,
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
      quantity: 5,
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
    }, {
      id: 11,
      name: 'limes',
      quantity: 3,
      food_type_id: 2,
      member_id: 1
    }, {
      id: 12,
      name: 'cayenne',
      quantity: 1,
      food_type_id: 4,
      member_id: 1
    }, {
      id: 13,
      name: 'jalapenos',
      quantity: 4,
      food_type_id: 3,
      member_id: 1
    }, {
      id: 14,
      name: 'roma tomatoes',
      quantity: 3,
      food_type_id: 3,
      member_id: 1
    }, {
      id: 15,
      name: 'garlic cloves',
      quantity: 4,
      food_type_id: 3,
      member_id: 1
    }, {
      id: 16,
      name: 'salt',
      quantity: 1,
      food_type_id: 4,
      member_id: 1
    }, {
      id: 17,
      name: 'cilantro',
      quantity: 1,
      food_type_id: 4,
      member_id: 1
    }, {
      id: 18,
      name: 'whole chicken',
      quantity: 1,
      food_type_id: 1,
      member_id: 1
    }, {
      id: 19,
      name: 'butter',
      quantity: 4,
      food_type_id: 5,
      member_id: 1
    }, {
      id: 20,
      name: 'celery',
      quantity: 5,
      food_type_id: 3,
      member_id: 1
    }, {
      id: 21,
      name: 'onion powder',
      quantity: 1,
      food_type_id: 4,
      member_id: 1
    }, {
      id: 22,
      name: 'ground turkey',
      quantity: 4,
      food_type_id: 1,
      member_id: 1
    }, {
      id: 23,
      name: 'bread crumbs',
      quantity: 1,
      food_type_id: 5,
      member_id: 1
    }, {
      id: 24,
      name: 'eggs',
      quantity: 12,
      food_type_id: 1,
      member_id: 1
    }, {
      id: 25,
      name: 'parsley',
      quantity: 1,
      food_type_id: 4,
      member_id: 1
    }];

    return knex('food').insert(foods);
  });
};
