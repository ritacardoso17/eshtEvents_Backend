const Router = require("express").Router
var router = Router()

const controller = require("../controllers/Menus/menus/menuController")

router.post("/menus", controller.addMenu)
router.delete("/menus/:id", controller.removeMenu)
router.put("/menus/:id", controller.updateMenu)


module.exports = router