let connection = require('../../../database/dbConfig.js')

//funcao criada para adicionar uma reserva a base de dados
function addReservations(id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, id_menu, id_local, id_decoration, obs, callback) {
    const sql = "INSERT INTO reserva_evento (id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva, id_estado, id_menu, id_localizacao, id_decoracao,opiniao,observacao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(sql, [id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, 1, id_menu, id_local, id_decoration, "Ainda sem opinião", obs], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Adicionada" })
    })
}
//funcao criada para remover uma reserva selecionada por id
function removeReservations(id, callback) {
    const sql = "DELETE FROM reserva_evento WHERE id_reserva = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Removida" })
    })
}
//retorna todos os dados da tabela reerva_evento
function getReservations(callback) {
    const sql = "SELECT id_reserva,extra.descritivo as extra,utilizador.nome as user,nr_pessoas, data_hora_reserva, data_hora_evento,farda.descritivo as farda , tipo_reserva.descritivo as tipoReserva,estado.descritivo as estado, menu.descritivo as menu, institucao.nome as escola, decoracao.descritivo as decoracao, opiniao FROM reserva_evento,tipo_reserva,estado, extra, farda,utilizador,menu,institucao,decoracao WHERE tipo_reserva.id_tipo_reserva = reserva_evento.id_tipo_reserva AND utilizador.id_utilizador=reserva_evento.id_utilizador AND estado.id_estado = reserva_evento.id_estado AND extra.id_extra = reserva_evento.id_extra AND farda.id_farda=reserva_evento.id_farda AND menu.id_menu=reserva_evento.id_menu AND institucao.id_ipp = reserva_evento.id_localizacao AND decoracao.id_decoracao = reserva_evento.id_decoracao"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { message:results })
    })
}
//retorna os dados de uma so reserva selecionada por id
function getReservationsId(id, callback) {
    const sql = "SELECT id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, id_tipo_reserva,id_estado, id_menu, id_localizacao, id_decoracao, opiniao from reserva_evento WHERE id_reserva=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}
function getReservationsUserId(id, callback) {
    const sql = "SELECT id_reserva,id_extra, id_utilizador, nr_pessoas, data_hora_reserva, data_hora_evento, id_farda, tipo_reserva.descritivo as tipoReserva,estado.descritivo as estado, id_menu, institucao.descritivo as localizacao, id_decoracao, opiniao FROM reserva_evento,tipo_reserva,estado WHERE id_utilizador=? AND tipo_reserva.id_tipo_reserva = reserva_evento.id_tipo_reserva AND institucao.descritivo = reserva_evento.i estado.id_estado = reserva_evento.id_estado "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

//edita os dados da opinião de uma reserva consoante o seu id
function updateOpinion(opinion, id, callback) {
    const sql = "UPDATE reserva_evento SET opiniao=? WHERE id_reserva = ? "
    connection.query(sql, [opinion, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Opinião Editada" })
    })
}
module.exports = {
    addReservations: addReservations,
    removeReservations: removeReservations,
    getReservations: getReservations,
    getReservationsId: getReservationsId,
    getReservationsUserId: getReservationsUserId,
    updateOpinion: updateOpinion
}