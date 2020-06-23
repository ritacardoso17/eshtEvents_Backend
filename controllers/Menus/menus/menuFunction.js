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
/**FAZER FUNÇOES PARA ALTERAR O RESTO DAS TABELAS */
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
function updateMenu(id, id_tipo_reserva, description, img,id_componente, callback) {
    connection
    const sql = "UPDATE menu SET id_tipo_reserva=?, descritivo=?,img=? WHERE id_menu=? "
    connection.query(sql, [id_tipo_reserva, description, img, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Editado" })
        removeMenuComponent(id,id_componente)
    })
    connection
}
function removeMenuComponent(id,id_componente, callback) {
    connection

    const sql = "DELETE FROM menu_prato WHERE id_menu = ? AND id_componente=?"
    connection.query(sql, [id,id_componente], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Removido" })
        addMenuComponent(id,id_componente)
    })

    connection
}

function addMenuComponent( id_menu,id_componente, callback) {
    connection

    const sql = "INSERT INTO menu_prato (id_menu,id_componente) VALUES (?, ?)"
    connection.query(sql, [id_menu,id_componente], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Menu Adicionada" })
    })

    connection
}

// Retorna os dados de todos os menus
function getMenu(callback) {
    connection

    const sql = "SELECT id_menu,tipo_reserva.descritivo,menu.descritivo as name,img FROM menu, tipo_reserva WHERE tipo_reserva.id_tipo_reserva = menu.id_tipo_reserva "
    connection.query(sql, function (error, rows, fields) {
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

    const sql = "SELECT id_menu as id, descritivo as name, img FROM menu WHERE id_tipo_reserva=?"
    connection.query(sql, [id_menu_type], function (error, rows, fields) {
        if (error) { callback(error) }
        else {
            callback(null, {
                sucess: true, message: {
                    rows
                }
            })
        }

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