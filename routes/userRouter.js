const Router = require("express").Router
const middleware = require("../Middleware")
const multer = require("multer")
var saveImg = multer({dest:'img/users /'})
var router = Router()

const controller = require("../controllers/Users/userController")
const verify = new controller.verifyLogin
router.post("/users",saveImg.single('img'), controller.addUser)
router.delete("/users/:id",controller.removeUser)
router.put("/users/:id",saveImg.single('img'),controller.updateUser)
router.post("/login",verify.login)
router.post("/logout",controller.logout)
module.exports = router

