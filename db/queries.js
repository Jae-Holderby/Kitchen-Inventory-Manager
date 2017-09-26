const knex = require('./knex')

module.exports = {
  getInventory: function(){
    return knex('*').from('inventory')
  },
  getItemByID: function(id){
    return knex('inventory')
    .where('id', id).first();
  }
}
