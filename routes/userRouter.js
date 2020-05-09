const Router = require("express").Router
var router = Router()

const controller = require("../controllers/user/userController")

router.post("/users", controller.addUser)

module.exports = router

