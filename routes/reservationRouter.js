const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/EventReservation/reservation/reservationControllers")
router.post("/reservations", controller.addReservations)
router.delete("/reservations/:id", controller.removeReservations)
router.put("/reservations/:id", controller.updateReservations)

module.exports = router