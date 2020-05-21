const roomsFunctions = require("./roomsFunctions")

// VER O PORQUE DA DESCRIÇÃO ESTAR NULL
function addRooms(req, result){
    let description = req.body.description

    roomsFunctions.addRooms(description, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function removeRooms(req, result) {
    let id = req.params.id

    roomsFunctions.removeRooms(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function updateRooms(req, result) {
    let id = req.params.id
    let description = req.body.description

    roomsFunctions.updateRooms(id, description, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { 
    addRooms: addRooms,
    removeRooms: removeRooms,
    updateRooms: updateRooms
}