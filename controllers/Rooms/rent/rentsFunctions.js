const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addRents(id_user, date_reserv, date_required, duration, id_room, callback) {
    connection.connect()

    const sql = "INSERT INTO aluguer_espaco (id_utilizador, data_hora_aluguer, data_hora_requirida, duracao, id_estado, id_espaco) VALUES (?,?,?,?,?,?)"
    connection.query(sql, [id_user, date_reserv, date_required, duration, 1, id_room], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Aluguer de Espaço Adicionado" })
    })

    connection.end()
}
module.exports = { addRents: addRents }