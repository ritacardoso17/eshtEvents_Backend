//Utilizar function criada para tratar os possiveis erros
const evenTypeFunctions = require("./evenTypeFunctions")

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
module.exports = {
    getEvenType:getEvenType, 
    getEvenTypeID:getEvenTypeID 
}