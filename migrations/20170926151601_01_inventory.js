
exports.up = function(knex, Promise) {
  return knex.schema.createTable('inventory', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.integer('quantitiy');
    table.boolean('protein');
    table.boolean('fruit');
    table.boolean('vegetable');
    table.boolean('spice');
    table.boolean('misc')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('inventory')
};
