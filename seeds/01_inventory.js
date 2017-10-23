
exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM inventory; ALTER SEQUENCE inventory_id_seq RESTART WITH 11;')

  .then(() => {

    let items = [{
      id: 1,
      name: 'chicken thighs',
      quantity: 8,
      protein: true,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 2,
      name: 'onions',
      quantity: 1,
      protein: false,
      fruit: false,
      vegetable: true,
      spice: false,
      misc: false
    }, {
      id: 3,
      name: 'sweet potatoes',
      quantity: 4,
      protein: false,
      fruit: false,
      vegetable: true,
      spice: false,
      misc: false
    }, {
      id: 4,
      name: 'milk',
      quantity: 3,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: true
    }, {
      id: 5,
      name: 'salmon fillets',
      quantity: 4,
      protein: true,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 6,
      name: 'almond butter',
      quantity: 15,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: true
    }, {
      id: 7,
      name: 'avocados',
      quantity: 4,
      protein: false,
      fruit: true,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 8,
      name: 'apples',
      quantity: 9,
      protein: false,
      fruit: true,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 9,
      name: 'cinnomon',
      quantity: 9,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: true,
      misc: false
    }, {
      id: 10,
      name: 'cumin',
      quantity: 12,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: true,
      misc: false
    }];

    return knex('inventory').insert(items);
  });
};
