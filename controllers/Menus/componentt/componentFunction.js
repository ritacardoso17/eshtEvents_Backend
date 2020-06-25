let connection = require('../../../database/dbConfig.js')

//adiciona componentes a tabela componente
function addComponents(name,callback)  {
    const sql = "INSERT INTO componente (descritivo) VALUES (?)"
    connection.query(sql, [name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Adicionado" })
    })
}

//remove um componente selecionado por id
function removeComponents(id, callback) {
    const sql = "DELETE FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Removido" })
    })
}
//retorna dados da tabela componete
function getComponents(id,callback) {
    const sql = "SELECT componente.id_componente,componente.descritivo FROM componente, menu, menu_prato WHERE menu.id_menu = ?  AND menu.id_menu = menu_prato.id_menu AND componente.id_componente = menu_prato.id_componente"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
        
}
//retrona dados de so um componente
function getComponentsId(id, callback) {
    const sql = "SELECT descritivo FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}
function getAllComponents( callback) {
    connection
    const sql = "SELECT id_componente, descritivo FROM componente "
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

module.exports = {
    getAllComponents:getAllComponents,
    addComponents: addComponents,
    removeComponents: removeComponents,
    getComponents: getComponents,
    getComponentsId: getComponentsId
}