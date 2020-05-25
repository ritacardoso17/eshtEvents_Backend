const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function getDecoration(callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM decoracao"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}
function getDecorationID(id, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM decoracao WHERE id_decoracao=? "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = { getDecoration:getDecoration,getDecorationID:getDecorationID }