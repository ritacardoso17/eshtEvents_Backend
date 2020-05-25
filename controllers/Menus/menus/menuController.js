const menuFunctions = require("./menuFunction")

function addMenu(req, result) {
    let description = req.body.description
    let id_tipo_reserva = req.body.id_tipo_reserva
    let img = req.file
    menuFunctions.addMenu(description, id_tipo_reserva, img.path, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
function removeMenu(req, result) {
    let id = req.params.id
    menuFunctions.removeMenu(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function updateMenu(req, result) {
    let id = req.params.id
    let id_tipo_reserva = req.body.id_tipo_reserva
    let description = req.body.description
    let img = req.file

    menuFunctions.updateMenu(id, id_tipo_reserva, description, img.path, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getMenu(req, result) {

    menuFunctions.getMenu((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getMenuId(req, result) {
    let id = req.params.id

    menuFunctions.getMenuId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = {
    addMenu: addMenu,
    removeMenu: removeMenu,
    updateMenu: updateMenu,
    getMenu: getMenu,
    getMenuId: getMenuId
}
