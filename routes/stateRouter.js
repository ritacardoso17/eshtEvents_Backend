const Router = require("express").Router
var router = Router()

const controller = require("../controllers/state/stateControllers")

router.get("/state/:id", controller.getStateId)

module.exports = router