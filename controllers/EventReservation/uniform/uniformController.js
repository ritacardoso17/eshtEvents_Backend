const uniformFunctions = require("./uniformFunction")

function addUniform(req, result) {
    let name = req.body.name
    let img = ""
    uniformFunctions.addUniform(name, img, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

function removeUniform(req, result) {
    let id = req.params.id
    uniformFunctions.removeUniform(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
function updateUniform(req, result) {
    let name = req.body.name
    let img = ""
    let id = req.params.id
    uniformFunctions.updateUniform(name,img,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getUniform(req, result) {
    let name = req.body.name
    let img = ""
    let id = req.params.id

    uniformFunctions.getUniform(name,img,id, (error, sucess) => {
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
    addUniform: addUniform, 
    removeUniform: removeUniform, 
    updateUniform: updateUniform,
    getUniform: getUniform,
    getUniformId: getUniformId
}
