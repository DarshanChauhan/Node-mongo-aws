const ComicBook = require("../models/comic-book.model");

const create = async (data) => {
  return await ComicBook.create(data);
};

const findAll = async () => {
  return await ComicBook.find().populate("authorId");
};

const findOne = async (filter) => {
  return await ComicBook.findOne({ ...filter }).populate("authorId");
};

module.exports = { create, findAll, findOne };
