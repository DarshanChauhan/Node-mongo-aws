const bookServices = require("../services/book.services.js");

const createBook = async (req, res, next) => {
  const author = await bookServices.create(req.body);
  res.status(201).json({ author });
};

const getAllBooks = async (req, res, next) => {
  const authors = await bookServices.findAll();
  res.status(200).json({ authors });
};

const getBook = async (req, res, next) => {
  const author = await bookServices.findOne({ _id: req.params.id });
  res.status(200).json({ authors: author });
};

const getBooksByName = async (req, res, next) => {
  const books = await bookServices.getBooksByName(req.body.searchParams);
  res.status(201).json({ books });
};

module.exports = { createBook, getAllBooks, getBook, getBooksByName };
