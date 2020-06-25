//Utilizar function criada para tratar os possiveis erros

const componentFunctions = require("./componentFunction")

function addComponents(req, result) {
    let name = req.body.name
    componentFunctions.addComponents(name, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

function removeComponents(req, result) {
    let id = req.params.id
    componentFunctions.removeComponents(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getComponentsMenus(req, result) {
    let id = req.params.id

    componentFunctions.getComponents(id,(error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getComponents(req, result) {
    let id = req.params.id

    componentFunctions.getComponents(id,(error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getComponentsId(req, result) {
    let id = req.params.id

    componentFunctions.getComponentsId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getAllComponents(req, result) {
   
    componentFunctions.getAllComponents((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = {
    getComponentsMenus:getComponentsMenus, 
    addComponents: addComponents,
    removeComponents: removeComponents,
    getComponents: getComponents,
    getComponentsId: getComponentsId,
    getAllComponents:getAllComponents
 }
