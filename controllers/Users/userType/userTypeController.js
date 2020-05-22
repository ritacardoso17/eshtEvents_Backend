const userTypeFunctions = require("./userTypeFunctions")

function addUserType(req, result) {
    let description = req.body.description
    userTypeFunctions.addUserType(description, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function removeUserType(req, result) {
    let id = req.params.id
    userTypeFunctions.removeUserType(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
function updateUserType(req, result) {
    let description = req.body.description
    let id = req.params.id
    userTypeFunctions.updateUserType(description,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
module.exports = { addUserType: addUserType, removeUserType:removeUserType, updateUserType:updateUserType  }