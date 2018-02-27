var connection = require("../config/connections.js");

var orm = {
    selectAll: function(table, onResult) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            // console.log(result);
            onResult(err, result);
        });
    },
    insertOne: function(table, columns, values, onResult) {
        const query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, columns, values] , function(err, result) {
            // now we pass the result back in our callback
            console.log(err);
            onResult(err, result);
        })
    },
    updateOne: function(table, column, value, id, onResult) {
        const query = 'UPDATE ?? SET ?? = ? WHERE id = ?';
        connection.query(query, [table, column, value, id], function(err, result) {
            console.log(err);
            onResult(err, result);
        })
    }
};

module.exports = orm;