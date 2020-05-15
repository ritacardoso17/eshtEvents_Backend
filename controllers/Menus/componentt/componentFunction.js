const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addComponent(name,callback)  {
    connection.connect()

    const sql = "INSERT INTO componente (descritivo) VALUES (?)"
    connection.query(sql, [name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Componente Adicionado" })
    })

    connection.end()
}

module.exports = {addComponent:addComponent}