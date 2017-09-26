
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', (table) => {
    table.increments();
    table.text('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('recipe')
};
