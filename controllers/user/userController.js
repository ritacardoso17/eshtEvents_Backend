const userFunctions = require("./userFunctions")
const bcrypt = require("bcrypt")

function addUser(req, result) {

    let name = req.body.name
    let img = ""
    let pass = req.body.pass
    let data = req.body.data
    let telemovel = req.body.telemovel
    let idE = req.body.idE
    let email = req.body.email

    bcrypt.hash(pass, 10, function (err, hash) {
        userFunctions.addUser(name,hash , img, data, telemovel,idE, email, (error, sucess) => {
            if (error) {
                throw error
                return
            }
            result.json(sucess)
        })
    })


}
module.exports = { addUser: addUser }