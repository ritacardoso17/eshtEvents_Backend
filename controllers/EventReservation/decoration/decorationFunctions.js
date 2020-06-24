let connection = require('../../../database/dbConfig.js')

//retorna dados da tabela decoracao da base de dados
function getDecoration(id, description, img, callback) {
    const sql = "SELECT id_decoracao, descritivo, img FROM decoracao"
    connection.query(sql, [id, description, img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}
//retorna dados da tabela de uma certa decoracao decoracao da base de dados
function getDecorationID(id, callback) {
    const sql = "SELECT descritivo FROM decoracao WHERE id_decoracao=? "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

module.exports = { getDecoration:getDecoration,getDecorationID:getDecorationID }