const userFunctions = require("./userFunctions")
const bcrypt = require("bcrypt")

// Utiliza as funções dos users criadas e trata dos seus erros
function addUser(req, result) {
    let name = req.body.name
    let img = req.body.img
    let pass = req.body.pass
    let data = req.body.data
    let telemovel = req.body.telemovel
    let idE = req.body.idE
    let email = req.body.email
    bcrypt.hash(pass, 10, function (error, hash) {
        userFunctions.addUser(name, hash, img, data, telemovel, idE, email, (error, sucess) => {
            if (error) {
                throw error
                return
            }
            result.json(sucess)
        })
    })
}

function removeUser(req, result) {
    let id = req.params.id
    userFunctions.removeUser(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function updateUser(req, result) {
    let img = req.body.img
    let oldPass = req.body.oldPass
    let pass = req.body.pass
    let id = req.params.id

    if (!(img === null || img === "" || img === undefined)) {
        userFunctions.updateUser(img, id, (error, sucess) => {
            if (error) {
                throw error
                return
            }
            result.json(sucess)
        })
    }

    if (!(pass === null || pass === "" || pass === undefined)) {
        bcrypt.hash(pass, 10, function (error, hash) {
            userFunctions.updateUserPass(hash, oldPass, id, (error, sucess) => {
                if (error) {
                    throw error
                    return
                }
                result.json(sucess)
            })
        })

    }

}

//Retornar todos os dados da tabela
function getUser(req, result) {
    userFunctions.getUser((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getSchool(req, result) {
    userFunctions.getSchool((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getUserID(req, result) {
    let id = req.params.id
    userFunctions.getUserID(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function updateTypeUser(req, result) {
    let id = req.params.id

    userFunctions.updateTypeUserA(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

// Class para Login
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

module.exports = { updateTypeUser: updateTypeUser, addUser: addUser, removeUser: removeUser, updateUser: updateUser, getUser: getUser, getSchool: getSchool, getUserID: getUserID, verifyLogin: verifyLogin, logout: logout }