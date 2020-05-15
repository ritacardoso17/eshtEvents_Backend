const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/Rooms/rent/rentsControllers")
router.post("/rooms", controller.addRents)
/* router.delete("/uniforms/:id", controller.removeUniform)
router.put("/uniforms/:id", controller.updateUniform) */

module.exports = router