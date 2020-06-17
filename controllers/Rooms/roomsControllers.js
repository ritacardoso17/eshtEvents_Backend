const roomsFunctions = require("./roomsFunctions")

// Utiliza as funções dos espaços criadas e trata dos seus erros
function getRooms(req, result) {

    roomsFunctions.getRooms((error, sucess) => {
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