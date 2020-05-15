const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addDecoration  (description, img, callback) {
    connection.connect()

    const sql = "INSERT INTO decoracao (descritivo, img) VALUES (?, ?)"
    connection.query(sql, [description, img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Decoração Adicionada" })
    })

    connection.end()
}

module.exports = { addDecoration: addDecoration }