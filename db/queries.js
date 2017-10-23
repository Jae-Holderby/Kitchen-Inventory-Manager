const knex = require('./knex')

module.exports = {
  getFood: function(){
    return knex('*').from('food')
  },
  getItemByID: function(food_id){
    return knex('food')
    .where('id', food_id).first();
  },
  addItem: function(body){
    return knex('food')
    .insert(body).returning('*')
  },
  editItem: function(inventory_id, edit){
      return knex('food').where('id', inventory_id).update(edit).returning('*')
  },
  deleteItem: function(id) {
    return knex('food').where('id', id).del()
  }
}
