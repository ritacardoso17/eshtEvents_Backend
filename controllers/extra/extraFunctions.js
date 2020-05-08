const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

exports.addExtra = (name, callback) => {
    connection.connect()

    const sql = "INSERT INTO extra (descritivo) VALUES (?)"
    connection.query(sql, [name], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Extra Adicionado" })
    })

    connection.end()
}

exports.removeExtra = (id, callback) => {
    connection.connect()

    const sql = "DELETE FROM extra WHERE id_extra = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Extra Removido" })
    })

    connection.end()
}

exports.updateExtra = (name,id, callback) => {
    connection.connect()
    const sql = "UPDATE extra SET descritivo=? WHERE id_extra=? "
    connection.query(sql, [name,id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Extra Editado" })
    })

    connection.end()
}

