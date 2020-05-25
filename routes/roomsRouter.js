const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()
 
const controller = require("../controllers/Rooms/roomsControllers")

router.get("/rooms", controller.getRooms)
router.get("/rooms/:id", controller.getRoomsId)

module.exports = router