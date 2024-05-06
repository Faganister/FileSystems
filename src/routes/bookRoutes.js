const express = require("express");
const validation = require("../routes/bookRoutesValidation")
const router = express.Router()

const bookControllers = require("../controllers/bookControllers");


router.get("/", validation.validateParam, bookControllers.getBooks)

router.get("/:id",validation.validateHeader, validation.validateParam, bookControllers.getBook)

router.post("/", validation.validateBody, validation.validateHeader, bookControllers.createBook)

router.put("/:id",validation.validateParam, validation.validateBody, validation.validateHeader, bookControllers.updateBook)

router.delete("/:id",validation.validateParam, validation.validateHeader, bookControllers.deleteBook)

module.exports = router