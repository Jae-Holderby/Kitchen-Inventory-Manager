
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('recipe')
};
