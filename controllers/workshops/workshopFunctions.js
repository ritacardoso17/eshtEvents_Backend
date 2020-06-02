// const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

// Adiciona os workshops
function addWorkshops(description, n_vacancies, date_hour, price, id_local, img, callback) {
    connection.connect()

    const sql = "INSERT INTO inscricao_workshop (descritivo, nr_vagas, data_hora, preco, id_localizacao,img) VALUES (?,?,?,?,?,?)"
    connection.query(sql, [description, n_vacancies, date_hour, price, id_local,img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Adicionado" })
    })

    connection.end()
}

// Remove os workshops selecionados
function removeWorkshops(id, callback) {
    connection.connect()

    const sql = "DELETE FROM inscricao_workshop WHERE id_workshop = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Removido" })
    })

    connection.end()
}

// Altera certos elementos dos workshops
function updateWorkshops(id,description, n_vacancies, date_hour, price, id_local,img, callback) {
    connection.connect()
    const sql = "UPDATE inscricao_workshop SET descritivo=?, nr_vagas=?, data_hora=?, preco=?, id_localizacao=?,img=? WHERE id_workshop=? "
    connection.query(sql, [description, n_vacancies, date_hour, price, id_local,img,id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Editado" })
    })
    connection.end()
}

// Retorna todos os workshops
function getWorkshops(callback) {
    connection.connect()

    const sql = "SELECT descritivo, nr_vagas, data_hora, preco, id_localizacao FROM inscricao_workshop"
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()

}

// Retorna os workshops escolhidos através do seu id
function getWorkshopsId( id, callback){
    connection.connect()

    const sql = "SELECT id_workshop, descritivo, nr_vagas, data_hora, preco, id_localizacao FROM inscricao_workshop WHERE id_workshop=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = { addWorkshops:addWorkshops, removeWorkshops:removeWorkshops, updateWorkshops:updateWorkshops, getWorkshops: getWorkshops, getWorkshopsId: getWorkshopsId }