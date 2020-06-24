// const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

// Adiciona os workshops
function addWorkshops(description, n_vacancies, date_hour, price, id_local, img, callback) {
    const sql = "INSERT INTO inscricao_workshop (descritivo, nr_vagas, data_hora, preco, id_localizacao,img) VALUES (?,?,?,?,?,?)"
    connection.query(sql, [description, n_vacancies, date_hour, price, id_local,img], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Adicionado" })
    })
}

// Remove os workshops selecionados
function removeWorkshops(id, callback) {
    const sql = "DELETE FROM inscricao_workshop WHERE id_workshop = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Removido" })
    })
}

// Altera certos elementos dos workshops
function updateWorkshops(id,description, n_vacancies, date_hour, price, id_local,img, callback) {
    const sql = "UPDATE inscricao_workshop SET descritivo=?, nr_vagas=?, data_hora=?, preco=?, id_localizacao=?,img=? WHERE id_workshop=? "
    connection.query(sql, [description, n_vacancies, date_hour, price, id_local,img,id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Editado" })
    })
}

// Retorna todos os workshops
function getWorkshops(callback) {
    const sql = "SELECT id_workshop,nome, nr_vagas, data_hora, preco,localizacao.descritivo as local,inscricao_workshop.descritivo,img FROM inscricao_workshop,localizacao WHERE localizacao.id_localizacao = inscricao_workshop.id_localizacao "
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

// Retorna os workshops escolhidos através do seu id
function getWorkshopsId( id, callback){
    const sql = "SELECT id_workshop, descritivo, nr_vagas, data_hora, preco, id_localizacao FROM inscricao_workshop WHERE id_workshop=?"
    connection.query(sql, [id], function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

function addUserWorkshops(id_user, id_workshop, callback) {
    const sql = "INSERT INTO workshop_utilizador (id_utilizador, id_workshop) VALUES (?,?)"
    connection.query(sql, [id_user, id_workshop], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Adicionado" })
    })
}

module.exports = { 
    addWorkshops:addWorkshops,
    removeWorkshops:removeWorkshops,
    updateWorkshops:updateWorkshops,
    getWorkshops: getWorkshops,
    getWorkshopsId: getWorkshopsId,
    addUserWorkshops: addUserWorkshops
}