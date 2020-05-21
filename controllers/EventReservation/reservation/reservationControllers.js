const rentsFunctions = require("./reservationFunctions")

function addReservations(req, result){
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

    rentsFunctions.addReservations(id_extra, id_user, n_people, date_reserv, date_required, id_uniform, id_reservType, id_menu, id_local, id_decoration, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

/* function removeReservations(req, result) {
    let id = req.params.id
    rentsFunctions.removeRents(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function updateReservations(req, result) {
    let id = req.params.id
    let date_required = req.body.date_required
    let duration = req.body.duration
    let id_room = req.body.id_room

    rentsFunctions.updateRents(id, date_required, duration, id_room, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
} */

module.exports = { 
    addReservations: addReservations,
    removeReservations: removeReservations,
    updateReservations: updateReservations
}