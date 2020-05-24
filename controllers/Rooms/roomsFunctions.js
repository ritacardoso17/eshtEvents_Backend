const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addRooms(description, callback) {
    connection.connect()

    const sql = "INSERT INTO tipo_espaco (descritivo) VALUES (?)"
    connection.query(sql, [description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Espaço Adicionado" })
    })

    connection.end()
}

function removeRooms(id, callback) {
    connection.connect()

    const sql = "DELETE FROM tipo_espaco WHERE id_espaco=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Espaço Removido" })
    })

    connection.end()
}

function updateRooms(id, description, callback) {
    connection.connect()
    const sql = "UPDATE tipo_espaco SET descritivo=? WHERE id_espaco=?"
    connection.query(sql, [id, description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Espaço Editado" })
    })
    connection.end()
}

function getRooms(id, description, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM tipo_espaco"
    connection.query(sql, [id, description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results})
    })
    connection.end()
}

function getRoomsId(id, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM tipo_espaco WHERE id_espaco=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results})
    })
    connection.end()
}

module.exports = { 
    addRooms: addRooms,
    removeRooms: removeRooms,
    updateRooms: updateRooms,
    getRooms: getRooms,
    getRoomsId: getRoomsId
}