let connection = require('../../../database/dbConfig.js')

//Retorna todos os dados da tabela tipo_reserva da base de dados
function getEvenType(callback) {
    const sql = "SELECT id_tipo_reserva,descritivo FROM tipo_reserva"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

//Retorna dados de um so tipo de reserva da tabela tipo_reserva

function getEvenTypeID(id, callback) {
    const sql = "SELECT descritivo FROM tipo_reserva WHERE id_tipo_reserva = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

module.exports = {
    getEvenType: getEvenType,
    getEvenTypeID: getEvenTypeID
}