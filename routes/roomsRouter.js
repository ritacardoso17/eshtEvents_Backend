const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/Rooms/roomsControllers")
router.post("/rooms", controller.addRooms)
router.delete("/rooms/:id", controller.removeRooms)
router.put("/rooms/:id", controller.updateRooms)
router.get("/rooms", controller.getRooms)
router.get("/rooms/:id", controller.getRoomsId)

module.exports = router