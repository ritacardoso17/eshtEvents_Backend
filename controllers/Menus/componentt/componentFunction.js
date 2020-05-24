const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addComponents(name,callback)  {
    connection.connect()

    const sql = "INSERT INTO componente (descritivo) VALUES (?)"
    connection.query(sql, [name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Adicionado" })
    })

    connection.end()
}

function removeComponents(id, callback) {
    connection.connect()

    const sql = "DELETE FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Removido" })
    })

    connection.end()
}

function updateComponents(id, name, callback) {
    connection.connect()
    const sql = "UPDATE componente SET descritivo=? WHERE id_componente=? "
    connection.query(sql, [id, name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Editado" })
    })
    connection.end()
}

function getComponents(id, name, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM componente"
    connection.query(sql, [id, name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Buscado" })
    })
    connection.end()
}

function getComponentsId(id, name, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM componente WHERE id_componente=?"
    connection.query(sql, [id, name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente id Buscado" })
    })
    connection.end()
}

module.exports = {
    addComponents: addComponents,
    removeComponents: removeComponents,
    updateComponents: updateComponents,
    getComponents: getComponents,
    getComponentsId: getComponentsId
}