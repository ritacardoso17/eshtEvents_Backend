const jsonwebtoken = require('jsonwebtoken')
const config = require("./config.json")
let connection = require('./database/dbConfig.js')

function verifyToken(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }
    const sql = "SELECT token FROM token_bloqueado WHERE token=?"
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
}

module.exports = { verifyToken: verifyToken } 