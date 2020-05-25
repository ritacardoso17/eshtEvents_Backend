const Router = require("express").Router
const multer = require("multer")
var saveImg = multer({ dest: 'img/menus/' })
var router = Router()

const controller = require("../controllers/Menus/menus/menuController")

router.post("/menus", saveImg.single('img'), controller.addMenu)
router.delete("/menus/:id", controller.removeMenu)
router.put("/menus/:id", saveImg.single('img'), controller.updateMenu)
router.get("/menus", controller.getMenu)
router.get("/menus/:id", controller.getMenuId)


module.exports = router