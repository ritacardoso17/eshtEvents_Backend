const Router = require("express").Router
var router = Router()

const controller = require("../controllers/EventReservation/extra/extraControllers")

router.post("/extras", controller.addExtra)
router.delete("/extras/:id", controller.removeExtra)
router.put("/extras/:id", controller.updateExtra)

module.exports = router