const Router = require("express").Router
const multer = require("multer")
var saveImg = multer({dest:'img/decorations/'})
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/EventReservation/decoration/decorationController")

router.post("/decorations", middleware.verifyToken,saveImg.single('img'),controller.addDecoration)
router.delete("/decorations/:id", middleware.verifyToken, controller.removeDecoration)
router.put("/decorations/:id", middleware.verifyToken,saveImg.single('img'), controller.updateDecoration)
router.get("/decorations", middleware.verifyToken, controller.getDecoration)
router.get("/decorations/:id", middleware.verifyToken, controller.getDecorationID)

module.exports = router