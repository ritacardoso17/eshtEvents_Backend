const Router = require("express").Router
const multer = require("multer")
var saveImg = multer({dest:'img/decorations/'})
var router = Router()

const controller = require("../controllers/EventReservation/decoration/decorationController")

router.post("/decorations",saveImg.single('img'),controller.addDecoration)
router.delete("/decorations/:id", controller.removeDecoration)
router.put("/decorations/:id",saveImg.single('img'), controller.updateDecoration)
router.get("/decorations", controller.getDecoration)
router.get("/decorations/:id", controller.getDecorationID)

module.exports = router