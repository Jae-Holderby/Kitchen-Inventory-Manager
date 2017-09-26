
exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM inventory; ALTER SEQUENCE inventory_id_seq RESTART WITH 11;')

  .then(() => {

    let items = [{
      id: 1,
      name: 'Chicken Thighs',
      quantitiy: 8,
      protein: true,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 2,
      name: 'Onions',
      quantitiy: 1,
      protein: false,
      fruit: false,
      vegetable: true,
      spice: false,
      misc: false
    }, {
      id: 3,
      name: 'Sweet Potatoes',
      quantitiy: 4,
      protein: false,
      fruit: false,
      vegetable: true,
      spice: false,
      misc: false
    }, {
      id: 4,
      name: 'Milk',
      quantitiy: 3,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: true
    }, {
      id: 5,
      name: 'Salmon Fillets',
      quantitiy: 4,
      protein: true,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 6,
      name: 'Almond Butter',
      quantitiy: 15,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: false,
      misc: true
    }, {
      id: 7,
      name: 'Avocados',
      quantitiy: 4,
      protein: false,
      fruit: true,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 8,
      name: 'Apples',
      quantitiy: 9,
      protein: false,
      fruit: true,
      vegetable: false,
      spice: false,
      misc: false
    }, {
      id: 9,
      name: 'Cinnomon',
      quantitiy: 9,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: true,
      misc: false
    }, {
      id: 10,
      name: 'Cumin',
      quantitiy: 12,
      protein: false,
      fruit: false,
      vegetable: false,
      spice: true,
      misc: false
    }];

    return knex('inventory').insert(items);
  });
};
