const book = require("../controller/book");

var router = require("express").Router();

router.post("/create", book.createBook);
router.post("/getBook", book.getBookById);
router.get("/getAllBooks", book.getAllBooks);
router.post("/delete", book.deleteBookById);

module.exports = router;
