const Router = require("express").Router
var router = Router()
 
const controller = require("../controllers/workshops/workshopController")
router.post("/workshops", controller.addWorkshops)
router.delete("/workshops/:id", controller.removeWorkshops)
router.put("/workshops/:id", controller.updateWorkshops)

module.exports = router