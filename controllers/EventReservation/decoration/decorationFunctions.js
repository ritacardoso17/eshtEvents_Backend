const dbConfig = require("../../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

//Add Decoraçao 
function addDecoration  (description, img, callback) {
    connection.connect()

    const sql = "INSERT INTO decoracao (descritivo, img) VALUES (?, ?)"
    connection.query(sql, [description, img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Decoração Adicionada" })
    })

    connection.end()
}
//Remove Decoraçao
function removeDecoration (id, callback)  {
    connection.connect()

    const sql = "DELETE FROM decoracao WHERE id_decoracao = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Decoração Removida" })
    })

    connection.end()
}
//Editar Decoração 
function updateDecoration(description,img, id, callback) {
    connection.connect()
    const sql = "UPDATE decoracao SET descritivo=?,img=? WHERE id_decoracao=? "
    connection.query(sql, [description,img, id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Decoração Editada" })
    })
    connection.end()
}

function getDecoration(description, id, callback) {
    connection.connect()
    const sql = "SELECT descritivo FROM decoracao"
    connection.query(sql, [description, id], function (error, results) {
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

module.exports = { addDecoration: addDecoration, removeDecoration:removeDecoration, updateDecoration:updateDecoration,getDecoration:getDecoration,getDecorationID:getDecorationID }