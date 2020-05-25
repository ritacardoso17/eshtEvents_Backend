const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

/* function getExtra(name, id, callback) {
    connection.connect()
    const sql = "UPDATE extra SET descritivo=? WHERE id_extra=? "
    connection.query(sql, [name, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Extra Editado" })
    })

    connection.end()
}
function getExtraId(callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM extra"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
} */

module.exports = {
  /*   getExtra: getExtra,
    getExtraId: getExtraId */
}

