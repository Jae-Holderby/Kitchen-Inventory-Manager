
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.integer('quantity');
    table.integer('food_type_id').references('food_type.id').unsigned().onDelete('cascade').notNullable();
    table.integer('member_id').references('member.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('food')
};
