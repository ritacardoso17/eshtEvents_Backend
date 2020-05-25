const Router = require("express").Router
var router = Router()

const controller = require("../controllers/Menus/componentt/componentController")

router.post("/components", controller.addComponents)
router.delete("/components/:id", controller.removeComponents)
router.get("/components", controller.getComponents)
router.get("/components/:id", controller.getComponentsId)

module.exports = router