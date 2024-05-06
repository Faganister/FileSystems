const {body, query, param ,header} = require ("express-validator")
class BookRoutesValidation{
    validateBody = [
        body('genre').isString().withMessage("String expected"),
        body('author').custom(isAuthorValid).withMessage("At least 2 words(string) and not equals genre").not().equals(body("genre")),
        body("color").isString().withMessage("Должен передаться цвет книги в виде строки"),
        body("part").optional().trim().isInt().withMessage("Ожидается число")
    ];
  
    validateParam = [
        param('id').isLength({min:10}).withMessage("Минимальная длина 10").not().isEmail()
    ]
    validateQuery = [
        query('url').isURL().withMessage("Ожидается url")
    ]
    validateHeader =[
        header("Content-Type").equals("application/json").withMessage("Ожидается json")
    ]
}
const isAuthorValid = (value) => {
    if (typeof value === "string" && value.split(" ").length >= 2) {
      return true
    }
    return false
}



module.exports = new BookRoutesValidation()