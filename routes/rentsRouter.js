const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/Rooms/rent/rentsControllers")
router.post("/roomRents", controller.addRents)
router.delete("/roomRents/:id", controller.removeRents)
router.put("/roomRents/:id", controller.updateRents)

module.exports = router