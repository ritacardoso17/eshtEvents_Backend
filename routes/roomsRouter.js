const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()
 
const controller = require("../controllers/Rooms/roomsControllers")

router.get("/rooms", middleware.verifyToken, controller.getRooms)
router.get("/rooms/:id", middleware.verifyToken, controller.getRoomsId)

module.exports = router