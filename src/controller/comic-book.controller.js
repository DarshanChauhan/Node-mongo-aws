const bookServices = require("../services/book.services.js");

const createComicBook = async (req, res, next) => {
  const comicBook = await bookServices.create(req.body);
  res.status(201).json({  comicBook });
};

const getAllComicBooks = async (req, res, next) => {
  const comicBooks = await bookServices.findAll();
  res.status(200).json({  comicBooks });
};

const getComicBook = async (req, res, next) => {
  const comicBook = await bookServices.findOne({_id : req.params.id});
  res.status(200).json({  comicBook });
};

module.exports = { createComicBook, getAllComicBooks , getComicBook };
