const menuFunctions = require("./menuFunction")

function addMenu(req, result) {
    let description = req.body.description
    let id_tipo_reserva = req.body.id_tipo_reserva
    menuFunctions.addMenu(description, id_tipo_reserva, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

module.exports = { addMenu: addMenu }
