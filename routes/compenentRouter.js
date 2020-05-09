const Router = require("express").Router
var router = Router()

const controller = require("../controllers/component/componentController")

router.post("/components", controller.addComponent)

module.exports = router

