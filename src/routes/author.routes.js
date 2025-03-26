const authorRoutes = require("express").Router();
const { validate } = require("express-validation");

const {
  createAuthor,
  getAllAuthorsWithBooks,
} = require("../controller/author.controller");
const authorValidate = require("../validation/author.validation");

authorRoutes.route("/").get(getAllAuthorsWithBooks);
authorRoutes
  .route("/create")
  .post(validate(authorValidate.createAuthor), createAuthor);

module.exports = authorRoutes;
