const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function addUniform(name, img, callback) {
    connection.connect()

    const sql = "INSERT INTO farda (descritivo,img) VALUES (?,?)"
    connection.query(sql, [name, img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Farda Adicionada" })
    })

    connection.end()
}

function removeUniform(id, callback) {
    connection.connect()

    const sql = "DELETE FROM farda WHERE id_farda = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Farda Removida" })
    })

    connection.end()
}

function updateUniform(name, img, id, callback) {
    connection.connect()
    const sql = "UPDATE farda SET descritivo=?, img=? WHERE id_farda=? "
    connection.query(sql, [name, img, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Farda Editada" })
    })
    connection.end()
}

module.exports = {
    addUniform: addUniform,
    removeUniform: removeUniform,
    updateUniform: updateUniform
}
