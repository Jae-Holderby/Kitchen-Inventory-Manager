
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('member')
};
