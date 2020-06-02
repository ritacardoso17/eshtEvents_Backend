/* const dbConfig = require("../../../database/dbConfig.json") */
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

//retorna todos os dados da tabela extra
function getExtra(callback) {
    connect()

    const sql = "SELECT descritivo FROM extra"
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    end()

}
//retorna a informaçao de um extra selecionada apartir do id
function getExtraId( id, callback){
    connect()

    const sql = "SELECT id_extra, descritivo FROM extra WHERE id_extra=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    end()
}

module.exports = {
  getExtra: getExtra,
  getExtraId: getExtraId
}

