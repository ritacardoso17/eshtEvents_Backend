const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addDecoration  (description, img, callback) {
    connection.connect()

    const sql = "INSERT INTO decoracao (descritivo, img) VALUES (?, ?)"
    connection.query(sql, [description, img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Decoração Adicionada" })
    })

    connection.end()
}
function removeDecoration (id, callback)  {
    connection.connect()

    const sql = "DELETE FROM decoracao WHERE id_decoracao = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Decoração Removida" })
    })

    connection.end()
}
function updateDecoration(description, id, callback) {
    connection.connect()
    const sql = "UPDATE decoracao SET descritivo=? WHERE id_decoracao=? "
    connection.query(sql, [description, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Decoração Editada" })
    })
    connection.end()
}

module.exports = { addDecoration: addDecoration, removeDecoration:removeDecoration, updateDecoration:updateDecoration }