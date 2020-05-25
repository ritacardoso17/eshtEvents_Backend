const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()
 
const controller = require("../controllers/EventReservation/uniform/uniformController")

router.get("/uniforms", middleware.verifyToken, controller.getUniform)
router.get("/uniforms/:id", middleware.verifyToken, controller.getUniformId)


module.exports = router