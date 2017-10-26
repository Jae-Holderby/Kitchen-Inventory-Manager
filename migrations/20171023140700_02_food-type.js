
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_type', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
    table.boolean('selected');
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('food_type')
};
