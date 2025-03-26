const { options } = require("joi");
const Author = require("../models/author.model");
const Book = require("../models/book.model");

const create = async (data) => {
  return await Author.create(data);
};

const getAllAuthorsWithBooks = async () => {
  return await Author.find().populate("books");
};

module.exports = { create, getAllAuthorsWithBooks };
