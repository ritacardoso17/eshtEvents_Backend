const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/uniform/uniformController")
router.post("/uniforms", controller.addUniform)
router.delete("/uniforms/:id", controller.removeUniform)
router.put("/uniforms/:id", controller.updateUniform)

module.exports = router