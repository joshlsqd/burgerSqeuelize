const orm = require('../config/orm.js');

const burgers = {
    all: function(callback) {
        orm.selectAll('burgers', callback);
    },

    insert: function(burgerText, callback) {
        orm.insertOne('burgers', 'burger_name', burgerText, callback);
        },

    update: function(id, callback) {
        orm.updateOne('burgers', 'devoured', 1 , id, callback);
    }
}

module.exports = burgers;


