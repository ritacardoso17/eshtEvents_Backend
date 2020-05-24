const userFunctions = require("./userFunctions")
const bcrypt = require("bcrypt")

class verifyLogin {
    login(req, result) {
        let pass = req.body.pass
        let email = req.body.email

        userFunctions.login(pass, email, (error, sucess) => {
            if (error) {
                throw error
                return
            }
            result.json(sucess)
        })
    }
    landingPage(result) {
        result.json({ success: true, message: "eshtEvents" })
    }
}
function logout(req, result) {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }
    userFunctions.logout(token, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function addUser(req, result) {

    let name = req.body.name
    let img = ""
    let pass = req.body.pass
    let data = req.body.data
    let telemovel = req.body.telemovel
    let idE = req.body.idE
    let email = req.body.email

    bcrypt.hash(pass, 10, function (err, hash) {
        userFunctions.addUser(name, hash, img, data, telemovel, idE, email, (error, sucess) => {
            if (error) {
                throw error
                return
            }
            result.json(sucess)
        })
    })


}
module.exports = { addUser: addUser, verifyLogin: verifyLogin,logout:logout }