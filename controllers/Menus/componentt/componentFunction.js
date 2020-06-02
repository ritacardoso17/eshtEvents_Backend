/* const dbConfig = require("../../../database/dbConfig.json") */
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

//adiciona componentes a tabela componente
function addComponents(name,callback)  {
    connect()

    const sql = "INSERT INTO componente (descritivo) VALUES (?)"
    connection.query(sql, [name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Adicionado" })
    })

    end()
}

//remove um componente selecionado por id
function removeComponents(id, callback) {
    connect()

    const sql = "DELETE FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Removido" })
    })

    end()
}
//retorna dados da tabela componete
function getComponents(id, name, callback) {
    connect()
    const sql = "SELECT descritivo FROM componente"
    connection.query(sql, [id, name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    end()
}
//retrona dados de so um componente
function getComponentsId(id, callback) {
    connect()

    const sql = "SELECT descritivo FROM componente WHERE id_componente=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    end()
}

module.exports = {
    addComponents: addComponents,
    removeComponents: removeComponents,
    getComponents: getComponents,
    getComponentsId: getComponentsId
}