const jsonwebtoken = require('jsonwebtoken')
const dbConfig = require('./database/dbConfig.json')
const config = require("./config.json")
const mysql = require("mysql")
var connection = mysql.createConnection(dbConfig)

function verifyToken(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }
    const sql = "SELECT token FROM token_bloqueado WHERE token=?"
    connection.connect()
    connection.query(sql, [token], function (error, rows, fields) {
        if (rows.length != 0) { return res.json({ success: false, message: "Token Bloqueado" }) }
        else if (rows.length == 0) {
            jsonwebtoken.verify(token, config.secret, (error, decoded) => {
                if (error) {
                    return res.json({ success: false, message: "Token Invalido" })
                } else {
                    req.decoded = decoded
                    next()
                }
            })
        }
    })
    connection.end()
}

module.exports = { verifyToken: verifyToken } 