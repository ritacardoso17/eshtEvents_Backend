const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/Menus/componentt/componentController")

router.post("/components", middleware.verifyToken, controller.addComponents)
router.delete("/components/:id", middleware.verifyToken, controller.removeComponents)
router.get("/components",  controller.getComponents)
router.get("/components/:id", controller.getComponentsId)
router.get("/allComponents", middleware.verifyToken, controller.getAllComponents)

module.exports = router