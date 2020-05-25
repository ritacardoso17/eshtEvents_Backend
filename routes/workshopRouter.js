const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/workshops/workshopController")
router.post("/workshops", controller.addWorkshops)
router.delete("/workshops/:id", middleware.verifyToken, controller.removeWorkshops)
router.put("/workshops/:id", controller.updateWorkshops)
router.get("/workshops", controller.getWorkshops)
router.get("/workshops/:id", controller.getWorkshopsId)

module.exports = router