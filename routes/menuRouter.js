const Router = require("express").Router
var router = Router()

const controller = require("../controllers/Menus/menus/menuController")

router.post("/menus", controller.addMenu)


module.exports = router