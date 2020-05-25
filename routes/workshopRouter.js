const Router = require("express").Router
const middleware = require("../Middleware")
const multer = require("multer")
var saveImg = multer({dest:'img/workshops/'})
var router = Router()

const controller = require("../controllers/workshops/workshopController")
router.post("/workshops", middleware.verifyToken, saveImg.single('img'), controller.addWorkshops)
router.delete("/workshops/:id", middleware.verifyToken, controller.removeWorkshops)
router.put("/workshops/:id", middleware.verifyToken, saveImg.single('img'), controller.updateWorkshops)
router.get("/workshops", controller.getWorkshops)
router.get("/workshops/:id", controller.getWorkshopsId)

module.exports = router