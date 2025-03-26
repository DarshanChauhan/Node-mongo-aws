const bookRoutes = require("express").Router();
const { validate } = require("express-validation");
const {
  createBook,
  getAllBooks,
  getBook,
  getBooksByName,
} = require("../controller/book.controller");
const bookValidate = require("../validation/book.validation");

bookRoutes.route("/").get(getAllBooks);
bookRoutes.route("/search").post(getBooksByName);
bookRoutes.route("/create").post(validate(bookValidate.createBook), createBook);
bookRoutes.route("/:id").post(validate(bookValidate.getBook), getBook);

module.exports = bookRoutes;
