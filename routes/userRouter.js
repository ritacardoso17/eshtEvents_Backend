const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/Users/userController")
const verify = new controller.verifyLogin
router.post("/users", controller.addUser)
router.post("/login",verify.login)
router.post("/logout",controller.logout)
module.exports = router

