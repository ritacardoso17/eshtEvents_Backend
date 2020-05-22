const Router = require("express").Router
var router = Router()

const controller = require("../controllers/Users/userType/userTypeController")

router.post("/userTypes", controller.addUserType)
router.delete("/userTypes/:id", controller.removeUserType)
router.put("/userTypes/:id", controller.updateUserType)

module.exports = router