
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', (table) => {
    table.increments();
    table.integer('recipe_id').references('recipe.id').unsigned().onDelete('cascade').notNullable();
    table.integer('food_id').references('food.id').unsigned().onDelete('cascade').notNullable();
    table.integer('quantity')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('ingredient')
};
