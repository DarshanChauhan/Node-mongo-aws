const { options } = require("joi");
const Book = require("../models/book.model");

const create = async (data) => {
  return await Book.create(data);
};

const findAll = async () => {
  return await Book.find().populate("authorId");
};

const findOne = async (filter) => {
  return await Book.findOne({ ...filter }).populate("authorId");
};

const getBooksByName = async (searchParams) => {
  return await Book.aggregate([
    {
      $match:{
        name: {
          $regex: new RegExp(searchParams.toLowerCase() , "i")
        }
      }
    }
    // ,{
    //   $match: {
    //     name: searchParams, // elastic search
    //   },
    // },
  ]);
};

module.exports = { create, findAll, findOne, getBooksByName };
