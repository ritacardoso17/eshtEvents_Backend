const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/EventReservation/evenType/evenTypeController")

router.get("/evenTypes", middleware.verifyToken, controller.getEvenType)
router.get("/evenTypes/:id",middleware.verifyToken, controller.getEvenTypeID)
module.exports = router