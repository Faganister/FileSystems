const express = require("express");
const router = express.Router()
const validation = require("../routes/userRoutesValidation")

const userControllers = require("../controllers/userControllers");
 

router.get("/",validation.validateHeader,  userControllers.getUsers)

router.get("/:id",validation.validateParam, validation.validateHeader,  userControllers.getUser)

router.post("/", validation.validateBody, validation.validateHeader, userControllers.createUser)

router.put("/:id", validation.validateBody, validation.validateHeader, userControllers.updateUser)

router.delete("/:id",validation.validateParam, validation.validateHeader, userControllers.deleteUser)

module.exports = router