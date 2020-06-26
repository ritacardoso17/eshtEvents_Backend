const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()
 
const controller = require("../controllers/Rooms/rent/rentsControllers")
router.post("/roomRents", middleware.verifyToken, controller.addRents)
router.delete("/roomRents/:id", middleware.verifyToken, controller.removeRents)
router.get("/roomRents", controller.getRents)
// router.get("/roomRents/:id", middleware.verifyToken, controller.getRentsId)
router.get("/roomRents/:id", controller.getRentsUserId)
router.put("/rentOpinions/:id", controller.updateOpinion)
router.put("/changeStatusRents/:id", middleware.verifyToken,controller.updateState)
router.put("/changeStatusCancelRents/:id", middleware.verifyToken,controller.updateStateCancel)
module.exports = router