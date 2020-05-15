const Router = require("express").Router
var router = Router()

const controller = require("../controllers/Users/userController")

router.post("/users", controller.addUser)

module.exports = router

