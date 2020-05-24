const roomsFunctions = require("./roomsFunctions")

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

    roomsFunctions.updateRooms(description, id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getRooms(req, result) {
    let id = req.params.id
    let description = req.body.description

    roomsFunctions.getRooms(id, description, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getRoomsId(req, result) {
    let id = req.params.id

    roomsFunctions.getRoomsId(id, (error, sucess) => {
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
    updateRooms: updateRooms,
    getRooms: getRooms,
    getRoomsId: getRoomsId
}