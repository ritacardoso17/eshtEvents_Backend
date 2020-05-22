const Router = require("express").Router
var router = Router()

const controller = require("../controllers/Menus/componentt/componentController")

router.post("/components", controller.addComponents)
router.delete("/components/:id", controller.removeComponents)
router.put("/components/:id", controller.updateComponents)

module.exports = router

