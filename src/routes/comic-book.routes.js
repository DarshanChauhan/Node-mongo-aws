const comicBookRoutes = require("express").Router();
const { validate } = require("express-validation");
const bookValidate = require("../validation/book.validation");
const {
  getComicBook,
  createComicBook,
  getAllComicBooks,
} = require("../controller/comic-book.controller");

comicBookRoutes.route("/").get(getAllComicBooks);
comicBookRoutes
  .route("/create")
  .post(validate(bookValidate.createBook), createComicBook);
comicBookRoutes.route("/:id").post(validate(bookValidate.getBook), getComicBook);

module.exports = comicBookRoutes;
