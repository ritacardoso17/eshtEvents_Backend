const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)
//retorna dados da tabela farda na tabela base de dados
function getUniform(name, img, id, callback) {
    connection.connect()
    const sql = "SELECT descritivo, img FROM farda"
    connection.query(sql, [name, img, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}
//retorna dados sobre uma farda selecionada por id
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
    getUniform: getUniform,
    getUniformId: getUniformId
}
