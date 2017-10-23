
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_type', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('food_type')
};
