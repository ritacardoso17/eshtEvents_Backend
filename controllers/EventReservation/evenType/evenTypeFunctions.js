const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addEvenType  (description, callback) {
    connection.connect()

    const sql = "INSERT INTO tipo_reserva (descritivo) VALUES (?)"
    connection.query(sql, [description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Tipo de Evento Adicionado" })
    })

    connection.end()
}

function removeEvenType (id, callback)  {
    connection.connect()

    const sql = "DELETE FROM tipo_reserva WHERE id_tipo_reserva = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Tipo de Evento Removido" })
    })

    connection.end()
}

function updateEvenType(description, id, callback) {
    connection.connect()
    const sql = "UPDATE tipo_reserva SET descritivo=? WHERE id_tipo_reserva=? "
    connection.query(sql, [description, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Tipo de Evento Editado" })
    })
    connection.end()
}
module.exports = {addEvenType:addEvenType, removeEvenType:removeEvenType, updateEvenType:updateEvenType}