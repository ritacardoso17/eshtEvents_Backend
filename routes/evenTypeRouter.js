const Router = require("express").Router
var router = Router()

const controller = require("../controllers/evenType/evenTypeController")

router.post("/evenTypes", controller.addEvenType)
// router.delete("/evenTypes/:id", controller.removeEvenType)
// router.put("/evenTypes/:id", controller.updateEvenType)

module.exports = router