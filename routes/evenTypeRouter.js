const Router = require("express").Router
var router = Router()

const controller = require("../controllers/EventReservation/evenType/evenTypeController")

router.post("/evenTypes", controller.addEvenType)
router.delete("/evenTypes/:id", controller.removeEvenType)
router.put("/evenTypes/:id", controller.updateEvenType)
router.get("/evenTypes", controller.getEvenType)
router.get("/evenTypes/:id", controller.getEvenTypeID)
module.exports = router