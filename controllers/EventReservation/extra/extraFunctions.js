const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

//retorna todos os dados da tabela extra
function getExtra(callback) {
    connection.connect()

    const sql = "SELECT descritivo FROM extra"
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()

}
//retorna a informaçao de um extra selecionada apartir do id
function getExtraId( id, callback){
    connection.connect()

    const sql = "SELECT id_extra, descritivo FROM extra WHERE id_extra=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = {
  getExtra: getExtra,
  getExtraId: getExtraId
}

