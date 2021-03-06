//Utilizar function criada para tratar os possiveis erros

const extraFunctions = require("./extraFunctions")

function getExtra(req, result) {
    let id = req.params.id
    let name = req.body.name

    extraFunctions.getExtra(id, name, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getExtraId(req, result) {
    let id = req.params.id

    extraFunctions.getExtraId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { 
    getExtra: getExtra, 
    getExtraId:getExtraId
}
