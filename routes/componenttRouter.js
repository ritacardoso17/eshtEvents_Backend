const Router = require("express").Router
var router = Router()

const controller = require("../controllers/Menus/componentt/componentController")

router.post("/components", controller.addComponent)

module.exports = router

