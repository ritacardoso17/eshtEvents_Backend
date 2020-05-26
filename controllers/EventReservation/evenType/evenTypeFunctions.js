const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

//Retorna todos os dados da tabela tipo_reserva da base de dados
function getEvenType(callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM tipo_reserva"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

//Retorna dados de um so tipo de reserva da tabela tipo_reserva

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