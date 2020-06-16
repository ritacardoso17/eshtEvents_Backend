//Utilizar function criada para tratar os possiveis erros

const uniformFunctions = require("./uniformFunction")

function getUniform(req, result) {
    let name = req.body.name
    let img = ""
    let id_uniform = req.params.id_uniform
    let id = req.params.id

    uniformFunctions.getUniform(name,img,id_uniform, id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getUniformId(req, result) {
    let id = req.params.id

    uniformFunctions.getUniformId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { 
    getUniform: getUniform,
    getUniformId: getUniformId
}
