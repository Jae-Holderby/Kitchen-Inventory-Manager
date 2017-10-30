
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
    table.boolean('selected');
    table.integer('member_id').references('member.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('recipe')
};
