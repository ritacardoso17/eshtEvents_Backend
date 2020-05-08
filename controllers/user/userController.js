const dbConfig = require("../database/dbConfig.json");
const mysql = require("mysql")

var connection = mysql.createConnection(dbConfig);

//SELECT
connection.connect()
connection.query('SELECT * from tipo_user', function (err, rows, fields) {
    if (!err) {
        console.log(rows)
    }
    else
        console.log('Error while performing QUERY')
})