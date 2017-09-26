const knex = require('./knex')

module.exports = {
  getInventory: function(){
    return knex('*').from('inventory')
  },
  getItemByID: function(inventory_id){
    return knex('inventory')
    .where('id', inventory_id).first();
  },
  addItem: function(body){
    return knex('inventory')
    .insert(body).returning('*')
  },
  editItem: function(inventory_id, edit){
      return knex('inventory').where('id', inventory_id).update(edit).returning('*')
  },
}
