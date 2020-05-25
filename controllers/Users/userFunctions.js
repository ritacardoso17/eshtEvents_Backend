const dbConfig = require("../../database/dbConfig.json")
const jsonwebtoken = require('jsonwebtoken')
const config = require("../../config.json")
const bcrypt = require("bcrypt")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)

function login(pass, email, callback) {
    connection.connect()

    const sql = "SELECT email_ipp,password FROM utilizador WHERE email_ipp=?"
    connection.query(sql, [email], function (error, rows, fields) {
        if (!error) {
            bcrypt.compare(pass, rows[0].password, function (error, results) {
                if (error) {
                    callback(error)
                }
                if (results) {
                    let token = jsonwebtoken.sign({ email: email }, config.secret, { expiresIn: '2h' })
                    callback(null, { sucess: true, message: "Sessão iniciada", token: token })
                }
            })
        }
        else {
            callback(error)
        }
    })
    connection.end()
}

function addUser(name, pass, img, data, telemovel, idE, email, callback) {
    connection.connect()

    const sql = "INSERT INTO utilizador (id_tipoUser,nome,password,foto_perfil,data_nascimento,telemovel,id_ipp,email_ipp) VALUES (?,?,?,?,?,?,?,?)"
    connection.query(sql, [2, name, pass, img, data, telemovel, idE, email], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Utilizador Adicionado" })
    })

    connection.end()
}

function logout(token, callback) {
    connection.connect()

    const sql = "INSERT INTO token_bloqueado (token) VALUES (?)"
    connection.query(sql, [token], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Sessão Terminada com Sucesso" })
    })

    connection.end()
}


module.exports = { addUser: addUser, login: login, logout:logout}