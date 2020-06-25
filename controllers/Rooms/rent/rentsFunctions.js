let connection = require('../../../database/dbConfig.js')

// Adiciona aluguer de espaços
function addRents(id_user, date_reserv, date_required, duration, id_room, reason, callback) {
    const sql = "INSERT INTO aluguer_espaco (id_utilizador, data_hora_aluguer, data_hora_requirida, duracao, id_estado, id_espaco, motivo, opiniao) VALUES (?,?,?,?,?,?,?,?)"
    connection.query(sql, [id_user, date_reserv, date_required, duration, 1, id_room, reason, "Ainda sem opinião"], function (error, rows,fields) {
        if (error) callback(error)
        callback(null, { sucess: true, message: rows })
    })
}

// Remove os dados dos alugueres consoante o id escolhido
function removeRents(id, callback) {
    const sql = "DELETE FROM aluguer_espaco WHERE id_aluguer = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Aluguer Removido" })
    })
}

// Retorna todos os dados dos alugueres
function getRents(callback) {
    const sql = "SELECT id_aluguer, utilizador.nome as user, data_hora_aluguer, data_hora_requirida, duracao, estado.descritivo as estado, tipo_espaco.descritivo as espaco, motivo, opiniao FROM aluguer_espaco, estado, utilizador, tipo_espaco"
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

// Retorna os dados dos espaços escolhidos consoante o id
function getRentsId( id, callback){
    const sql = "SELECT id_utilizador, data_hora_aluguer, data_hora_requirida, duracao, id_estado, id_espaco, opiniao FROM aluguer_espaco WHERE id_aluguer=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}
function getRentsUserId(id, callback) {
    const sql = "SELECT id_aluguer,id_utilizador, data_hora_aluguer, data_hora_requirida, duracao, estado.descritivo as estado, tipo_espaco.descritivo as tipo_espaco, opiniao FROM aluguer_espaco,estado,tipo_espaco WHERE id_utilizador=? AND estado.id_estado=aluguer_espaco.id_estado AND tipo_espaco.id_espaco = aluguer_espaco.id_espaco  "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

//edita os dados da opinião de uma reserva consoante o seu id
function updateOpinion(opinion, id, callback) {
    const sql = "UPDATE aluguer_espaco SET opiniao=? WHERE id_aluguer = ? "
    connection.query(sql, [opinion, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Opinião Editada" })
    })
}

module.exports = { 
    addRents: addRents,
    removeRents: removeRents,
    getRents: getRents,
    getRentsId: getRentsId,
    getRentsUserId: getRentsUserId,
    updateOpinion: updateOpinion
}