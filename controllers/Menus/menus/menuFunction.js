const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addMenu(description, id_tipo_reserva, callback) {
    connection.connect()

    const sql = "INSERT INTO menu (id_tipo_reserva,descritivo) VALUES (?, ?)"
    connection.query(sql, [id_tipo_reserva, description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Adicionada" })
    })

    connection.end()
}
function removeMenu(id, callback) {
    connection.connect()

    const sql = "DELETE FROM menu WHERE id_menu = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Removido" })
    })

    connection.end()
}
function updateMenu(id, id_tipo_reserva, description, callback) {
    connection.connect()
    const sql = "UPDATE menu SET id_tipo_reserva=?, descritivo=? WHERE id_menu=? "
    connection.query(sql, [id_tipo_reserva, description, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Editado" })
    })
    connection.end()
}

function getMenu(callback) {
    connection.connect()

    const sql = "SELECT id_tipo_reserva, descritivo FROM menu"
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()

}

function getMenuId( id, callback){
    connection.connect()

    const sql = "SELECT id_menu, id_tipo_reserva, descritivo FROM menu WHERE id_menu=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = { addMenu: addMenu, removeMenu: removeMenu, updateMenu: updateMenu, getMenu:getMenu, getMenuId: getMenuId }