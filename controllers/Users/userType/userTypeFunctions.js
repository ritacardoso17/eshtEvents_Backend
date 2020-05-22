const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addUserType  (description, callback) {
    connection.connect()

    const sql = "INSERT INTO tipo_user (descritivo) VALUES (?)"
    connection.query(sql, [description], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Tipo de User Adicionado" })
    })

    connection.end()
}
function removeUserType (id, callback)  {
    connection.connect()

    const sql = "DELETE FROM tipo_user WHERE id_tipo_user = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Tipo de User Removido" })
    })

    connection.end()
}
function updateUserType(description, id, callback) {
    connection.connect()
    const sql = "UPDATE tipo_user SET descritivo=? WHERE id_tipo_user=? "
    connection.query(sql, [description, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Tipo de User Editado" })
    })
    connection.end()
}
module.exports = { addUserType: addUserType, removeUserType:removeUserType, updateUserType:updateUserType  }