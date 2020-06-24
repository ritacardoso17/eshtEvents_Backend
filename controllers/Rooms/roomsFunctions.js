// const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

// Retorna todos os dados dos espaços
function getRooms(callback) {
    const sql = "SELECT id_espaco, descritivo, img FROM tipo_espaco"
    connection.query(sql, function (error, rows, fields) {
        if (error) callback(error)
        callback(null, { sucess: true, message: rows})
    })
}

// Retorna os dados dos espaços consoante o id escolhido
function getRoomsId(id, callback) {
    const sql = "SELECT descritivo FROM tipo_espaco WHERE id_espaco=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results})
    })
}

module.exports = { 
    getRooms: getRooms,
    getRoomsId: getRoomsId
}