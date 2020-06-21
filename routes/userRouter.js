const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/Users/userController")
const verify = new controller.verifyLogin
router.post("/register", controller.addUser)
router.delete("/users/:id", middleware.verifyToken, controller.removeUser)
router.put("/users/:id", middleware.verifyToken,controller.updateUser)
router.put("/userType/:id", middleware.verifyToken,controller.updateUser)
router.get("/users",middleware.verifyToken, controller.getUser)
router.get("/users/:id",middleware.verifyToken, controller.getUserID)
router.get("/",verify.landingPage)
router.get("/schools",controller.getSchool)
router.post("/login",verify.login)
router.post("/logout", middleware.verifyToken, controller.logout)
module.exports = router

