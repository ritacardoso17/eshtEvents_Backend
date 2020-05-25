const decorationFunctions = require("./decorationFunctions")


//Retornar todos os dados da tabela
function getDecoration(req, result) {
    decorationFunctions.getDecoration(description,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
//Retornar uma só Decoração pelo ID
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