const Joi = require("joi");

const bookValidate = {
  createBook: {
    body: Joi.object({
      name: Joi.string().required(),
      authorId: Joi.string().required(),
      bookPublishDate: Joi.date().required(),
    }),
  },
  getBook: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};

module.exports = bookValidate;
