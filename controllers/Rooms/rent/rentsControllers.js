const rentsFunctions = require("./rentsFunctions")

// Utiliza as funções dos alugueres criadas e trata dos seus erros
function addRents(req, result){
    let id_user = req.body.id_user
    let date_reserv = req.body.date_reserv
    let date_required = req.body.date_required
    let duration = req.body.duration
    let id_room = req.body.id_room
    let reason = req.body.reason

    rentsFunctions.addRents(id_user, date_reserv, date_required, duration, id_room, reason, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function removeRents(req, result) {
    let id = req.params.id
    rentsFunctions.removeRents(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getRents(req, result) {

    rentsFunctions.getRents((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getRentsId(req, result) {
    let id = req.params.id

    rentsFunctions.getRentsId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getRentsUserId(req, result) {
    let id = req.params.id

    rentsFunctions.getRentsUserId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function updateOpinion(req, result) {
    let opinion = req.body.opinion
    let id = req.params.id
    rentsFunctions.updateOpinion(opinion, id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { 
    addRents: addRents,
    removeRents: removeRents,
    getRents: getRents,
    getRentsId: getRentsId,
    getRentsUserId: getRentsUserId,
    updateOpinion: updateOpinion
}