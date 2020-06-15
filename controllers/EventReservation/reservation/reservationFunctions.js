/* const dbConfig = require("../../../database/dbConfig.json") */
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

//funcao criada para adicionar uma reserva a base de dados
function addReservations(id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, id_menu, id_local, id_decoration, callback) {
    connection 

    const sql = "INSERT INTO reserva_evento (id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva, id_estado, id_menu, id_localizacao, id_decoracao) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(sql, [id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, 1, id_menu, id_local, id_decoration], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Adicionada" })
    })

    connection 
}
//funcao criada para remover uma reserva selecionada por id
function removeReservations(id, callback) {
    connection 

    const sql = "DELETE FROM reserva_evento WHERE id_reserva = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Removida" })
    })

    connection 
}
//retorna todos os dados da tabela reerva_evento
function getReservations( callback) {
    connection 
    const sql = "SELECT id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva,id_estado, id_menu, id_localizacao, id_decoracao, opiniao from reserva_evento"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, {results })
    })
    connection 
}
//retorna os dados de uma so reserva selecionada por id
function getReservationsId(id, callback) {
    connection 
    const sql = "SELECT id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva,id_estado, id_menu, id_localizacao, id_decoracao, opiniao from reserva_evento WHERE id_reserva=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}
function getReservationsUserId(id, callback) {
    connection 
    const sql = "SELECT id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, tipo_reserva.descritivo as tipoReserva,estado.descritivo as estado, id_menu, id_localizacao, id_decoracao, opiniao FROM reserva_evento,tipo_reserva,estado WHERE id_utilizador=? AND tipo_reserva.id_tipo_reserva = reserva_evento.id_tipo_reserva AND estado.id_estado = reserva_evento.id_estado "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}
//edita os dados da opinião de uma reserva consoante o seu id
function updateOpinion(opinion, id, callback) {
    connection
    const sql = "UPDATE reserva_evento SET opiniao=? WHERE id_reserva = ? "
    connection.query(sql, [opinion, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Opinião Editada" })
    })
    connection
}
module.exports = {
    addReservations: addReservations,
    removeReservations: removeReservations,
    getReservations: getReservations,
    getReservationsId: getReservationsId,
    getReservationsUserId: getReservationsUserId,
    updateOpinion: updateOpinion
}