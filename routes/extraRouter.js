const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/EventReservation/extra/extraControllers")

router.get("/extras", controller.getExtra)
router.get("/extras/:id", controller.getExtraId)

module.exports = router