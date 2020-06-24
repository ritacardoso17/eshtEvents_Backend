let connection = require('../../database/dbConfig.js')

//retorna a informaçao de um extra selecionada apartir do id
function getStateId( id, callback){
    const sql = "SELECT id_estado, descritivo FROM extra WHERE id_estado=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

module.exports = {
    getStateId: getStateId
}