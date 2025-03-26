const authorServices = require("../services/author.services");

const createAuthor = async (req, res, next) => {
  const author = await authorServices.create(req.body);
  res.status(201).json({ author });
};

const getAllAuthorsWithBooks = async (req, res, next) => {
  const authors = await authorServices.getAllAuthorsWithBooks();
  res.status(201).json({ authors });
};

module.exports = { createAuthor, getAllAuthorsWithBooks };
