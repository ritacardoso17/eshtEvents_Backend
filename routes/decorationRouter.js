const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/EventReservation/decoration/decorationController")

router.get("/decorations",middleware.verifyToken, controller.getDecoration)
router.get("/decorations/:id", controller.getDecorationID)

module.exports = router