const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()
 
const controller = require("../controllers/EventReservation/reservation/reservationControllers")
router.post("/reservations", middleware.verifyToken, controller.addReservations)
router.delete("/reservations/:id", middleware.verifyToken, controller.removeReservations)
router.get("/reservations",middleware.verifyToken, controller.getReservations)
// router.get("/reservations/:id", middleware.verifyToken, controller.getReservationsId)
router.get("/reservations/:id", controller.getReservationsUserId)
router.put("/reservOpinions/:id", controller.updateOpinion)

module.exports = router