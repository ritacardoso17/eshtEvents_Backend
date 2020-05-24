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

function updateComponents(req, result) {
    let id = req.params.id
    let name = req.body.name

    componentFunctions.updateComponents(id, name, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getComponents(req, result) {
    let id = req.params.id
    let name = req.body.name

    componentFunctions.getComponents(id, name, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getComponentsId(req, result) {
    let id = req.params.id
    let name = req.body.name

    componentFunctions.getComponentsId(id, name, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { 
    addComponents: addComponents,
    removeComponents: removeComponents,
    updateComponents: updateComponents,
    getComponents: getComponents,
    getComponentsId: getComponentsId
 }
