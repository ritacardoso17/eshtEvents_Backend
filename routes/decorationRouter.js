const Router = require("express").Router
var router = Router()

const controller = require("../controllers/EventReservation/decoration/decorationController")

router.post("/decorations", controller.addDecoration)
router.delete("/decorations/:id", controller.removeDecoration)
router.put("/decorations/:id", controller.updateDecoration)

module.exports = router