const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

//adiciona componentes a tabela componente
function addComponents(name,callback)  {
    connection.connect()

    const sql = "INSERT INTO componente (descritivo) VALUES (?)"
    connection.query(sql, [name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Adicionado" })
    })

    connection.end()
}

//remove um componente selecionado por id
function removeComponents(id, callback) {
    connection.connect()

    const sql = "DELETE FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Removido" })
    })

    connection.end()
}
//retorna dados da tabela componete
function getComponents(id, name, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM componente"
    connection.query(sql, [id, name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}
//retrona dados de so um componente
function getComponentsId(id, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = {
    addComponents: addComponents,
    removeComponents: removeComponents,
    getComponents: getComponents,
    getComponentsId: getComponentsId
}