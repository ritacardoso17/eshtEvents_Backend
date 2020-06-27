let connection = require('../../database/dbConfig.js')

// Adiciona os workshops
function addWorkshops(nome,description, n_vacancies,nr_vagas, date_hour,locutor, id_local, img, callback) {
    const sql = "INSERT INTO inscricao_workshop (nome,descritivo, nr_vagas, data_hora, locutor, id_localizacao, img) VALUES (?,?,?,?,?,?,?)"
    connection.query(sql, [nome,description, n_vacancies,nr_vagas, date_hour,locutor, id_local, img], function (error, results) {
        if (!error){
            callback(null, { sucess: true, message: "Workshop Adicionado" })
        } 
        else{callback(error)}
        
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
function updateWorkshops(id, title, n_vacancies, date_hour, teacher, id_local, description, img, callback) {
    const sql = "UPDATE inscricao_workshop SET nome=?, nr_vagas=?, data_hora=?, locutor=?, id_localizacao=?, descritivo=?, img=? WHERE id_workshop=? "
    connection.query(sql, [title, n_vacancies, date_hour, teacher, id_local, description, img, id], function (error, results) {
        if (error) callback(error)
        console.log(n_vacancies)
        callback(null, { sucess: true, message: "Workshop Editado" })
    })
}

// Retorna todos os workshops
function getWorkshops(callback) {
    const sql = "SELECT id_workshop, inscricao_workshop.nome as name, nr_vagas, data_hora, locutor, institucao.nome as local, inscricao_workshop.descritivo as info, img FROM inscricao_workshop, institucao WHERE institucao.id_ipp = inscricao_workshop.id_localizacao "
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

// Retorna os workshops escolhidos através do seu id
function getWorkshopsId(id, callback) {
    const sql = "SELECT id_workshop, descritivo, nr_vagas, data_hora, id_localizacao FROM inscricao_workshop WHERE id_workshop=?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
}

function addUserWorkshops(id_user, id_workshop, callback) {
    const sql = "INSERT INTO workshop_utilizador (id_utilizador, id_workshop) VALUES (?,?)"
    connection.query(sql, [id_user, id_workshop], function (error, results) {
        if (!error) {
            updateVagas(id_workshop)
        }
        else { callback(error) }

    })
}
function updateVagas(id_workshop,callback) {
    const sql1 = "SELECT nr_vagas FROM inscricao_workshop WHERE id_workshop=?"
    connection.query(sql1, [id_workshop], function (error, rows, fields) {
        let vagasUpdate = rows[0].nr_vagas - 1
        if (!error) {
            const sql2 = "UPDATE inscricao_workshop SET nr_vagas=? WHERE id_workshop=?"
            connection.query(sql2, [vagasUpdate, id_workshop], function (error, results) {
                callback(null, { message: "Inscrito no Workshop" })
            })
        }
        console.log(vagasUpdate)
    })
}


module.exports = {
    addWorkshops: addWorkshops,
    removeWorkshops: removeWorkshops,
    updateWorkshops: updateWorkshops,
    getWorkshops: getWorkshops,
    getWorkshopsId: getWorkshopsId,
    addUserWorkshops: addUserWorkshops
}