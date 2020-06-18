//Utilizar function criada para tratar os possiveis erros

const reservationFunctions = require("./reservationFunctions")

function addReservations(req, result) {
    let id_extra = req.body.id_extra
    let id_user = req.body.id_user
    let n_people = req.body.n_people
    let date_reserv = req.body.date_reserv
    let date_required = req.body.date_required
    let id_uniform = req.body.id_uniform
    let id_reservType = req.body.id_reservType
    let id_menu = req.body.id_menu
    let id_local = req.body.id_local
    let id_decoration = req.body.id_decoration
    let obs = req.body.obs

    reservationFunctions.addReservations(id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, id_menu, id_local, id_decoration,obs, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function removeReservations(req, result) {
    let id = req.params.id
    reservationFunctions.removeReservations(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getReservations(req, result) {


    reservationFunctions.getReservations((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getReservationsId(req, result) {
    let id = req.params.id

    reservationFunctions.getReservationsId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getReservationsUserId(req, result) {
    let id = req.params.id

    reservationFunctions.getReservationsUserId(id, (error, sucess) => {
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
    reservationFunctions.updateOpinion(opinion, id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = {
    addReservations: addReservations,
    removeReservations: removeReservations,
    getReservations: getReservations,
    getReservationsId: getReservationsId,
    getReservationsUserId: getReservationsUserId,
    updateOpinion: updateOpinion
}