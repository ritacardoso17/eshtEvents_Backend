const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function getEvenType(callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM tipo_reserva"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

function getEvenTypeID(id, callback) {
    connection.connect()
   
    const sql = "SELECT descritivo FROM tipo_reserva WHERE id_tipo_reserva = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })

    connection.end()
}

module.exports = {
    getEvenType: getEvenType,
    getEvenTypeID: getEvenTypeID
}