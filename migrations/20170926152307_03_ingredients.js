
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments();
    table.integer('recipe_id').references('recipe.id').unsigned().onDelete('cascade').notNullable();
    table.integer('inventory_id').references('inventory.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('ingredients')
};
