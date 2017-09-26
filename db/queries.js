const knex = require('./knex')

module.exports = {
  getInventory: function(){
    return knex('*').from('inventory')
  }
}
