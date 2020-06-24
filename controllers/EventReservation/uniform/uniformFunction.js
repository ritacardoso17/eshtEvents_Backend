let connection = require('../../../database/dbConfig.js')

//retorna dados da tabela farda na tabela base de dados
function getUniform(name, img, id_uniform, id, callback) {
    const sql = "SELECT id_farda, descritivo, img FROM farda"
    connection.query(sql, [name, img, id_uniform, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

//retorna dados sobre uma farda selecionada por id
function getUniformId(id, callback) {
    const sql = "SELECT id_ farda, descritivo, img FROM farda WHERE id_farda=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

module.exports = {
    getUniform: getUniform,
    getUniformId: getUniformId
}
