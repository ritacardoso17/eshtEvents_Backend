const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()
 
const controller = require("../controllers/EventReservation/reservation/reservationControllers")
router.post("/reservations", controller.addReservations)
router.delete("/reservations/:id", controller.removeReservations)
router.get("/reservations", controller.getReservations)
router.get("/reservations/:id", controller.getReservationsId)

module.exports = router