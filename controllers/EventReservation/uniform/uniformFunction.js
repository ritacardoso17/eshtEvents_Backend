/* const dbConfig = require("../../../database/dbConfig.json") */
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

//retorna dados da tabela farda na tabela base de dados
function getUniform(name, img, id_uniform, id, callback) {
    connection 
    const sql = "SELECT id_ farda, descritivo, img FROM farda"
    connection.query(sql, [name, img, id_uniform, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}
//retorna dados sobre uma farda selecionada por id
function getUniformId(id, callback) {
    connection 
    const sql = "SELECT id_ farda, descritivo, img FROM farda WHERE id_farda=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}

module.exports = {
    getUniform: getUniform,
    getUniformId: getUniformId
}
