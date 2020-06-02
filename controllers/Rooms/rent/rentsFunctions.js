// const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

// Adiciona aluguer de espaços
function addRents(id_user, date_reserv, date_required, duration, id_room, callback) {
    connect()

    const sql = "INSERT INTO aluguer_espaco (id_utilizador, data_hora_aluguer, data_hora_requirida, duracao, id_estado, id_espaco) VALUES (?,?,?,?,?,?)"
    connection.query(sql, [id_user, date_reserv, date_required, duration, 1, id_room], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Aluguer de Espaço Adicionado" })
    })

    end()
}

// Remove os dados dos alugueres consoante o id escolhido
function removeRents(id, callback) {
    connect()

    const sql = "DELETE FROM aluguer_espaco WHERE id_aluguer = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Aluguer Removido" })
    })

    end()
}

// Retorna todos os dados dos alugueres
function getRents(callback) {
    connect()

    const sql = "SELECT id_utilizador, data_hora_aluguer, data_hora_requirida, duracao, id_estado, id_espaco FROM aluguer_espaco"
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    end()

}

// Retorna os dados dos espaços escolhidos consoante o id
function getRentsId( id, callback){
    connect()

    const sql = "SELECT id_utilizador, data_hora_aluguer, data_hora_requirida, duracao, id_estado, id_espaco FROM aluguer_espaco WHERE id_aluguer=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    end()
}

module.exports = { 
    addRents: addRents,
    removeRents: removeRents,
    getRents: getRents,
    getRentsId: getRentsId
}