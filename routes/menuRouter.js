const Router = require("express").Router
const multer = require("multer")
const middleware = require("../Middleware")
var saveImg = multer({ dest: 'img/menus/' })
var router = Router()

const controller = require("../controllers/Menus/menus/menuController")

router.post("/menus", middleware.verifyToken, saveImg.single('img'), controller.addMenu)
router.delete("/menus/:id", middleware.verifyToken, controller.removeMenu)
router.put("/menus/:id", middleware.verifyToken, saveImg.single('img'), controller.updateMenu)
router.get("/menus", controller.getMenu)
router.get("/menus/:id", controller.getMenuId)
router.get("/menuTypesById/:id", controller.getMenuType)

module.exports = router