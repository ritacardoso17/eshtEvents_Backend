const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addMenu(description, id_tipo_reserva, callback) {
    connection.connect()

    const sql = "INSERT INTO menu (id_tipo_reserva,descritivo) VALUES (?, ?)"
    connection.query(sql, [id_tipo_reserva, description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Adicionada" })
    })

    connection.end()
}

module.exports = { addMenu: addMenu }