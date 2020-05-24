const evenTypeFunctions = require("./evenTypeFunctions")

function addEvenType(req, result) {
    let description = req.body.description
    evenTypeFunctions.addEvenType(description, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
function removeEvenType(req, result) {
    let id = req.params.id
    evenTypeFunctions.removeEvenType(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
function updateEvenType(req, result) {
    let description = req.body.description
    let id = req.params.id
    evenTypeFunctions.updateEvenType(description,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getEvenType(req, result) {
     evenTypeFunctions.getEvenType((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getEvenTypeID(req, result) {
    let id = req.params.id
    evenTypeFunctions.getEvenTypeID(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
module.exports = { addEvenType: addEvenType, removeEvenType: removeEvenType, updateEvenType: updateEvenType,getEvenType:getEvenType, getEvenTypeID:getEvenTypeID }