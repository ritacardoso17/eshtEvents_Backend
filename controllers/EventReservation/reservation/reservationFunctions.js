const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addReservations(id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, id_menu, id_local, id_decoration, callback) {
    connection.connect()

    const sql = "INSERT INTO reserva_evento (id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva, id_estado, id_menu, id_localizacao, id_decoracao) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(sql, [id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, 1, id_menu, id_local, id_decoration], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Adicionada" })
    })

    connection.end()
}

function removeReservations(id, callback) {
    connection.connect()

    const sql = "DELETE FROM reserva_evento WHERE id_reserva = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Removida" })
    })

    connection.end()
}

function getReservations(id, callback) {
    connection.connect()
    const sql = "SELECT id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva,id_estado, id_menu, id_localizacao, id_decoracao, opiniao, id_notificacao from reserva_evento"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

function getReservationsId(id, callback) {
    connection.connect()
    const sql = "SELECT id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva,id_estado, id_menu, id_localizacao, id_decoracao, opiniao, id_notificacao from reserva_evento WHERE id_reserva=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = {
    addReservations: addReservations,
    removeReservations: removeReservations,
    getReservations: getReservations,
    getReservationsId: getReservationsId
}