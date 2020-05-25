const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/Rooms/rent/rentsControllers")
router.post("/roomRents", controller.addRents)
router.delete("/roomRents/:id", controller.removeRents)

module.exports = router