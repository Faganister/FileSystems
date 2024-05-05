const express = require("express");
const router = express.Router()
const { body } = require('express-validator')
const validation = require("../routes/userRoutesValidation")

const userControllers = require("../controllers/userControllers");
 
const validateData = [
    body('email').isEmail().withMessage("Нужна @"),
    body('password').isLength({ min: 6 }),
    body("age").isInt().withMessage("Число должно быть integer")
];

router.get("/", userControllers.getUsers)

router.get("/:id", userControllers.getUser)

router.post("/", validateData, userControllers.createUser)

router.put("/:id", userControllers.updateUser)

router.delete("/:id", userControllers.deleteUser)

module.exports = router