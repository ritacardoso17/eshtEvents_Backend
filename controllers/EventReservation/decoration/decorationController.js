const decorationFunctions = require("./decorationFunctions")

//Adicionar Decoraçao: descritivo e img
function addDecoration(req, result) {
    let description = req.body.description
    let img = req.file
    decorationFunctions.addDecoration(description, img.path, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
//Remover Decoração pelo ID
function removeDecoration(req, result) {
    let id = req.params.id
    decorationFunctions.removeDecoration(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
//Editar Decoração: descritivo e img
function updateDecoration(req, result) {
    let description = req.body.description
    let img = req.file
    let id = req.params.id
    decorationFunctions.updateDecoration(description, img.path,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
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


module.exports = { addDecoration: addDecoration, removeDecoration:removeDecoration, updateDecoration:updateDecoration,getDecoration:getDecoration,getDecorationID:getDecorationID }