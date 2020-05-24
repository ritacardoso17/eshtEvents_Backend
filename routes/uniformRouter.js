const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/EventReservation/uniform/uniformController")
router.post("/uniforms", controller.addUniform)
router.delete("/uniforms/:id", controller.removeUniform)
router.put("/uniforms/:id", controller.updateUniform)
router.get("/uniforms", controller.getUniform)
router.get("/uniforms/:id", controller.getUniformId)


module.exports = router