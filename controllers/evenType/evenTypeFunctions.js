const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

exports.addEvenType = (description, callback) => {
    connection.connect()

    const sql = "INSERT INTO tipo_reserva (descritivo) VALUES (?)"
    connection.query(sql, [description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Tipo de Evento Adicionado" })
    })

    connection.end()
}