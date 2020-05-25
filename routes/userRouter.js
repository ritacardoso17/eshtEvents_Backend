const Router = require("express").Router
const middleware = require("../Middleware")
const multer = require("multer")
var saveImg = multer({dest:'img/users/'})
var router = Router()

const controller = require("../controllers/Users/userController")
const verify = new controller.verifyLogin
router.post("/users",saveImg.single('img'), controller.addUser)
router.delete("/users/:id", middleware.verifyToken, controller.removeUser)
router.put("/users/:id", middleware.verifyToken, saveImg.single('img'),controller.updateUser)
router.get("/users",middleware.verifyToken, controller.getUser)
router.get("/users/:id",middleware.verifyToken, controller.getUserID)
router.post("/login",verify.login)
router.post("/logout", middleware.verifyToken, controller.logout)
module.exports = router

