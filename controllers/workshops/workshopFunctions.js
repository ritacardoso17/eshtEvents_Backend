let connection = require('../../database/dbConfig.js')

// Adiciona os workshops
function addWorkshops(description, n_vacancies, date_hour, id_local, img, callback) {
    const sql = "INSERT INTO inscricao_workshop (descritivo, nr_vagas, data_hora, locutor, id_localizacao, img) VALUES (?,?,?,?,?,?)"
    connection.query(sql, [description, n_vacancies, date_hour, id_local,img], function (error, results) {
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
function updateWorkshops(id,description, n_vacancies, date_hour, id_local,img, callback) {
    const sql = "UPDATE inscricao_workshop SET descritivo=?, nr_vagas=?, data_hora=?, id_localizacao=?,img=? WHERE id_workshop=? "
    connection.query(sql, [description, n_vacancies, date_hour, id_local,img,id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Workshop Editado" })
    })
}

// Retorna todos os workshops
function getWorkshops(callback) {
    const sql = "SELECT id_workshop, inscricao_workshop.nome as nome, nr_vagas, data_hora, locutor, institucao.nome as local, inscricao_workshop.descritivo as info, img FROM inscricao_workshop, institucao WHERE institucao.id_ipp = inscricao_workshop.id_localizacao "
    connection.query(sql, function(error, results){
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

// Retorna os workshops escolhidos através do seu id
function getWorkshopsId( id, callback){
    const sql = "SELECT id_workshop, descritivo, nr_vagas, data_hora, id_localizacao FROM inscricao_workshop WHERE id_workshop=?"
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