const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/Rooms/rent/rentsControllers")
router.post("/rooms", controller.addRents)
router.delete("/rooms/:id", controller.removeRents)
router.put("/rooms/:id", controller.updateRents)

module.exports = router