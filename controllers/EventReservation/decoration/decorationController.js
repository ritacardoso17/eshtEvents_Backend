//Utilizar function criada para tratar os possiveis erros
 
const decorationFunctions = require("./decorationFunctions")

function getDecoration(req, result) {
    decorationFunctions.getDecoration(description,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getDecorationID(req, result) {
     let id = req.params.id
    decorationFunctions.getDecorationID(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}


module.exports = {getDecoration:getDecoration,getDecorationID:getDecorationID }