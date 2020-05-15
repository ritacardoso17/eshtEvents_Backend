const Router = require("express").Router
var router = Router()

const controller = require("../controllers/EventReservation/decoration/decorationController")

router.post("/decoration", controller.addDecoration)
// router.delete("/decoration/:id", controller.removeDecoration)
// router.put("/decoration/:id", controller.updateDecoration)

module.exports = router