const roomsFunctions = require("./roomsFunctions")

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
    getRooms: getRooms,
    getRoomsId: getRoomsId
}