// const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

// Adiciona menus
function addMenu(description, id_tipo_reserva, img, callback) {
    connection 

    const sql = "INSERT INTO menu (id_tipo_reserva,descritivo,img) VALUES (?, ?,?)"
    connection.query(sql, [id_tipo_reserva, description, img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Adicionada" })
    })

    connection 
}

// Remove os dados dos menus consoante o id escolhido
function removeMenu(id, callback) {
    connection 

    const sql = "DELETE FROM menu WHERE id_menu = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Removido" })
    })

    connection 
}

// Altera os dados dos menus consoante o id escolhido
function updateMenu(id, id_tipo_reserva, description, img, callback) {
    connection 
    const sql = "UPDATE menu SET id_tipo_reserva=?, descritivo=?,img=? WHERE id_menu=? "
    connection.query(sql, [id_tipo_reserva, description, img, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Editado" })
    })
    connection 
}

// Retorna os dados de todos os menus
function getMenu(callback) {
    connection 

    const sql = "SELECT id_tipo_reserva, descritivo FROM menu"
    connection.query(sql, function (error, rows,fields) {
        if (error) callback(error)
        callback(null, { sucess: true, message: rows })
    })
    connection 

}

// Retorna os dados dos menus consoante o id escolhido
function getMenuId(id, callback) {
    connection 

    const sql = "SELECT id_menu, id_tipo_reserva, descritivo FROM menu WHERE id_menu=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}

// Retorna os dados dos menus consoante o id do tipo de menu escolhido
function getMenuType(id_menu_type, callback) {
    connection 

    const sql = "SELECT id_menu, id_tipo_reserva, descritivo FROM menu WHERE id_tipo_reserva=?"
    connection.query(sql, [id_menu_type], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}

module.exports = {
    addMenu: addMenu,
    removeMenu: removeMenu,
    updateMenu: updateMenu,
    getMenu: getMenu,
    getMenuId: getMenuId,
    getMenuType: getMenuType
}