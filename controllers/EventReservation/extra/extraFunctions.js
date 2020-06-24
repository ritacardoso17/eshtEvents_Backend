let connection = require('../../../database/dbConfig.js')

//retorna todos os dados da tabela extra
function getExtra(id, name, callback) {
    const sql = "SELECT id_extra, descritivo FROM extra"
    connection.query(sql, [id, name], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}
//retorna a informaçao de um extra selecionada apartir do id
function getExtraId( id, callback){
    const sql = "SELECT id_extra, descritivo FROM extra WHERE id_extra=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

module.exports = {
  getExtra: getExtra,
  getExtraId: getExtraId
}

