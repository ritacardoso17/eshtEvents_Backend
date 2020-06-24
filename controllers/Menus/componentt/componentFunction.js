/* const dbConfig = require("../../../database/dbConfig.json") */
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

//adiciona componentes a tabela componente
function addComponents(name,callback)  {
    connection

    const sql = "INSERT INTO componente (descritivo) VALUES (?)"
    connection.query(sql, [name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Adicionado" })
    })

    connection
}

//remove um componente selecionado por id
function removeComponents(id, callback) {
    connection

    const sql = "DELETE FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Removido" })
    })

    connection
}
//retorna dados da tabela componete
function getComponents(id, name, callback) {
    connection
    const sql = "SELECT menu.id_menu, componente.descritivo FROM componente, menu, menu_prato WHERE menu_prato.id_menu = menu.id_menu AND menu_prato.id_componente = componente.id_componente"
    connection.query(sql, [id, name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
        
}
//retrona dados de so um componente
function getComponentsId(id, callback) {
    connection
    const sql = "SELECT descritivo FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection
}
function getAllComponents( callback) {
    connection
    const sql = "SELECT id_componente, descritivo FROM componente "
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection
}
module.exports = {
    getAllComponents:getAllComponents,
    addComponents: addComponents,
    removeComponents: removeComponents,
    getComponents: getComponents,
    getComponentsId: getComponentsId
}