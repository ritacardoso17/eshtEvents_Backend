const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function getUniform(name, img, id, callback) {
    connection.connect()
    const sql = "SELECT descritivo, img FROM farda"
    connection.query(sql, [name, img, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

function getUniformId(id, callback) {
    connection.connect()
    const sql = "SELECT descritivo, img FROM farda WHERE id_farda=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = {
    addUniform: addUniform,
    removeUniform: removeUniform,
    updateUniform: updateUniform,
    getUniform: getUniform,
    getUniformId: getUniformId
}
